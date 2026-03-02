import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, country } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App Password (not normal password)
    },
  });

  const googleSheetLink =
    "https://docs.google.com/spreadsheets/d/1Nbf44ETx6klNwnUzitJwV7KRiZzwj3j_7AP1KS2An14/edit?format=pdf";

  await transporter.sendMail({
    from: `"Aditya Exports" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Your Export Product Catalogue",
    html: `
      <h2>Hello,</h2>
      <p>Thank you for your interest from ${country}.</p>
      <p>You can download our export catalogue below:</p>
      <a href="${googleSheetLink}" target="_blank">
        View Export Catalogue
      </a>
      <br/><br/>
      <p>Regards,<br/>Aditya Exports Team</p>
    `,
  });

  return Response.json({ success: true });
}