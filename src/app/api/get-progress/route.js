import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getUserProgress } from "@/utils/db";

export async function GET(request) {
  const cookiesStore = cookies();
  const userDataCookie = cookiesStore.get("userData");
  const userData = userDataCookie ? JSON.parse(userDataCookie.value) : {};

  if (!userData.email) {
    return NextResponse.json({ currentStep: 0 });
  }

  const currentStep = await getUserProgress(userData.email);

  return NextResponse.json({ currentStep });
}
