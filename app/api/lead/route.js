// import nodemailer from "nodemailer";
// import { google } from "googleapis";
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc";
// import timezone from "dayjs/plugin/timezone";

// dayjs.extend(utc);
// dayjs.extend(timezone);

// export async function POST(req) {
//   try {
//     const { email, country } = await req.json();

//     if (!email) {
//       return Response.json({ error: "Email required" });
//     }

//     // ===============================
//     // 1️⃣ SAVE TO GOOGLE SHEET
//     // ===============================
//   const auth = new google.auth.GoogleAuth({
//   credentials: {
//     client_email: process.env.GOOGLE_CLIENT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//   },
//   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// const sheets = google.sheets({ version: "v4", auth });

// // ✅ Get IST Time (important for Vercel)
// const now = dayjs().tz("Asia/Kolkata");

// const date = now.format("YYYY-MM-DD");   // 2026-03-02
// const time = now.format("HH:mm:ss");     // 23:54:18

// await sheets.spreadsheets.values.append({
//   spreadsheetId: process.env.GOOGLE_SHEET_ID1,
//   range: "Sheet1!A:D",
//   valueInputOption: "USER_ENTERED",
//   requestBody: {
//     values: [
//       [email, country, date, time],
//     ],
//   },
// });

//     // ===============================
//     // 2️⃣ SEND EMAIL
//     // ===============================
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     const pdfLink = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID2}/export?format=pdf`;

//     await transporter.sendMail({
//       from: `"Aditya Exports" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your Export Product Catalogue",
//       html: `
//         <h2>Hello,</h2>
//         <p>Thank you for your interest from ${country}.</p>
//         <p>You can download our export catalogue below:</p>
//         <a href="${pdfLink}" target="_blank">
//           Download Catalogue PDF
//         </a>
//         <br/><br/>
//         <p>Regards,<br/>Aditya Exports Team</p>
//       `,
//     });

//     return Response.json({ success: true });

//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Something went wrong" });
//   }
// }





// import { google } from "googleapis";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const {
//       name,
//       company,
//       country,
//       email,
//       phone,
//       quantity,
//       message,
//     } = body;

//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
//       },
//       scopes: ["https://www.googleapis.com/auth/spreadsheets"],
//     });

//     const sheets = google.sheets({ auth, version: "v4" });

//     await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "Sheet1!A:H",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [
//           [
//             new Date().toLocaleString(),
//             name,
//             company,
//             country,
//             email,
//             phone,
//             quantity,
//             message,
//           ],
//         ],
//       },
//     });

//     return Response.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "Failed to store lead" }, { status: 500 });
//   }
// }



import nodemailer from "nodemailer";
import { google } from "googleapis";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      company,
      country,
      email,
      phone,
      quantity,
      message,
    } = body;

    if (!email) {
      return Response.json({ error: "Email required" }, { status: 400 });
    }

    // ===============================
    // GOOGLE AUTH
    // ===============================
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const now = dayjs().tz("Asia/Kolkata");
    const date = now.format("YYYY-MM-DD");
    const time = now.format("HH:mm:ss");

    // ===============================
    // SAVE TO SHEET 1 (Simple Leads)
    // ===============================
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID1,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, country, date, time]],
      },
    });

    // ===============================
    // SAVE TO SHEET 2 (Full Inquiry)
    // ===============================
    if (name) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID2,
        range: "Sheet1!A:J",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              date,
              time,
              name,
              company,
              country,
              email,
              phone,
              quantity,
              message,
            ],
          ],
        },
      });
    }

    // ===============================
    // SEND EMAIL
    // ===============================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const pdfLink = `https://docs.google.com/spreadsheets/d/${process.env.CATALOGUE_SHEET_ID}/export?format=pdf`;

    await transporter.sendMail({
      from: `"Aditya Exports" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Export Product Catalogue",
      html: `
        <h2>Hello ${name || ""},</h2>
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
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}import nodemailer from "nodemailer";
import { google } from "googleapis";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

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

// ✅ Get IST Time (important for Vercel)
const now = dayjs().tz("Asia/Kolkata");

const date = now.format("YYYY-MM-DD");   // 2026-03-02
const time = now.format("HH:mm:ss");     // 23:54:18

await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.GOOGLE_SHEET_ID1,
  range: "Sheet1!A:D",
  valueInputOption: "USER_ENTERED",
  requestBody: {
    values: [
      [email, country, date, time],
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

    const pdfLink = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID2}/export?format=pdf`;

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