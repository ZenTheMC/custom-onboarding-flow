import { NextResponse } from "next/server";
import { getUsers } from "../../../../utils/db";

export async function GET(request) {
  // Example: Optionally fetch data based on cookie (if relevant in future logic)
  const cookies = request.cookies;
  const sessionId = cookies.get("sessionId")?.value;

  const users = await getUsers(sessionId);
  return NextResponse.json(users);
}
