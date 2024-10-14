import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const body = await request.json();
  const cookiesStore = cookies();

  const userDataCookie = cookiesStore.get("userData");
  const userData = userDataCookie ? JSON.parse(userDataCookie.value) : {};

  const updatedUserData = { ...userData, ...body };

  const response = NextResponse.json({ message: "Progress saved." });
  response.cookies.set("userData", JSON.stringify(updatedUserData), {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
  });

  return response;
}
