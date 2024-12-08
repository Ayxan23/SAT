import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { getJwtSecretKey } from "@/libs/auth";

export async function POST(request) {
  const body = await request.json();
  // Make that below if condition as your own backend api call to validate user
  if (body.email === "ayxan042223@gmail.com" && body.password === "Ayxan2323") {
    //generate a token
    const token = await new SignJWT({
      email: body.email,
      role: "admin", // Set your own roles
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .sign(getJwtSecretKey());

    const response = NextResponse.json(
      { success: true },
      { status: 200, headers: { "content-type": "application/json" } }
    );
    //set cookie
    response.cookies.set({
      name: "token",
      value: token,
      path: "/",
    });
    //return the response
    return response;
  }
  return NextResponse.json({ success: false });
}
