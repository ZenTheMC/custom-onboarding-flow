import { NextResponse } from "next/server";
import { saveUser } from "../../../../utils/db";

export async function POST(request) {
  const cookies = request.cookies;

  const userData = cookies.get("userData")
    ? JSON.parse(cookies.get("userData").value)
    : {};

  await saveUser(userData);

  const response = NextResponse.json({ message: "Registration complete." });
  response.cookies.set("userData", "", {
    path: "/",
    maxAge: 0, // Effectively deletes the cookie
    httpOnly: true,
    sameSite: "strict",
  });

  return response;
}
