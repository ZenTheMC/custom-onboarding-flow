import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { saveUser } from "../../../../utils/db";

export async function POST(request) {
  const cookiesStore = cookies();

  const userDataCookie = cookiesStore.get("userData");
  const userData = userDataCookie ? JSON.parse(userDataCookie.value) : {};

  await saveUser(userData);

  const response = NextResponse.json({ message: "Registration complete." });
  cookiesStore.set("userData", "", {
    path: "/",
    maxAge: 0,
    httpOnly: true,
    sameSite: "strict",
  });

  return response;
}
