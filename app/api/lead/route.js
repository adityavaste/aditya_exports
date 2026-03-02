import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req) {
  try {
    const { email, country } = await req.json();

    if (!email) {
      return Response.json({ error: "Email required" });
    }

    // ===============================
    // 1️⃣ SAVE TO GOOGLE SHEET
    // ===============================
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [email, country, new Date().toLocaleString()],
        ],
      },
    });

    // ===============================
    // 2️⃣ SEND EMAIL
    // ===============================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const pdfLink = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}/export?format=pdf`;

    await transporter.sendMail({
      from: `"Aditya Exports" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Export Product Catalogue",
      html: `
        <h2>Hello,</h2>
        <p>Thank you for your interest from ${country}.</p>
        <p>You can download our export catalogue below:</p>
        <a href="${pdfLink}" target="_blank">
          Download Catalogue PDF
        </a>
        <br/><br/>
        <p>Regards,<br/>Aditya Exports Team</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Something went wrong" });
  }
}