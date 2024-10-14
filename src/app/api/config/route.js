import { NextResponse } from "next/server";
import { getConfig, saveConfig } from "../../../../utils/db";

export async function GET(request) {
  const cookies = request.cookies;
  const userId = cookies.get("userId")?.value;

  const config = await getConfig();
  return NextResponse.json(config);
}

export async function POST(request) {
  const newConfig = await request.json();

  const cookies = request.cookies;
  const userId = cookies.get("userId")?.value;

  await saveConfig(newConfig, userId);

  const response = NextResponse.json({ message: "Configuration saved." });
  response.cookies.set("lastUpdated", new Date().toISOString(), {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
  });

  return response;
}
