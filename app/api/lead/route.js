import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req) {
  const data = await req.json();

  const filePath = path.join(process.cwd(), "leads.json");

  let leads = [];

  if (fs.existsSync(filePath)) {
    leads = JSON.parse(fs.readFileSync(filePath));
  }

  leads.push({
    ...data,
    date: new Date().toISOString(),
  });

  fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

  return NextResponse.json({ success: true });
}