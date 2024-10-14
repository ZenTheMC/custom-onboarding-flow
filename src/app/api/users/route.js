import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUsers } from "../../../../utils/db";

export async function GET(request) {
  const cookiesStore = cookies();
  const sessionIdCookie = cookiesStore.get("sessionId");
  const sessionId = sessionIdCookie ? sessionIdCookie.value : null;

  const users = await getUsers(sessionId);
  return NextResponse.json(users);
}
