import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { updateUserProgress } from "@/utils/db";

export async function POST(request) {
  const body = await request.json();
  const cookiesStore = cookies();

  const userDataCookie = cookiesStore.get("userData");
  const userData = userDataCookie ? JSON.parse(userDataCookie.value) : {};

  const updatedUserData = { ...userData, ...body };

  // Update user's progress in the database
  await updateUserProgress(
    updatedUserData.email,
    updatedUserData,
    body.currentStep
  );

  const response = NextResponse.json({ message: "Progress saved." });
  // Set userData cookie with email
  response.cookies.set(
    "userData",
    JSON.stringify({ email: updatedUserData.email }),
    {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
    }
  );

  return response;
}
