import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  // Make that below if condition as your own backend api call to validate user
  if (body.email === "ayxan042223@gmail.com") {
    const response = NextResponse.json(
      { success: true },
      { status: 200, headers: { "content-type": "application/json" } }
    );
    return response;
  }
  return NextResponse.json({ success: false });
}
