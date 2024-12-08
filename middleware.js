import { NextResponse } from "next/server";
import { verifyJwtToken, isAuthPages, isAdminPage } from "./libs/auth";

export async function middleware(request) {
  const { url, nextUrl, cookies } = request;
  const { value: token } = cookies.get("token") ?? { value: null };

  const hasVerifiedToken = token && (await verifyJwtToken(token));
  const isAuthPageReq = isAuthPages(nextUrl.pathname);
  const isAdminPageReq = isAdminPage(nextUrl.pathname);

  if (isAuthPageReq) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      return response;
    }

    const response = NextResponse.redirect(new URL("/", url));
    return response;
  }

  if (hasVerifiedToken.role != "admin" && isAdminPageReq) {
    const response = NextResponse.redirect(new URL("/", url));
    return response;
  }

  if (!hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);

    return NextResponse.redirect(new URL(`/auth/login?${searchParams}`, url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/admin/:path*", "/account/:path*"],
};
