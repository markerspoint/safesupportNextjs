import { NextResponse } from "next/server";

export function middleware(request: Request) {
  // Simulate auth check with cookies (replace with NextAuth.js for production)
  const authCookie = request.headers.get("cookie")?.includes("auth=");
  const isAuthenticated = !!authCookie;

  if (!isAuthenticated && (request.nextUrl.pathname.startsWith("/student") || request.nextUrl.pathname.startsWith("/counselor"))) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/student/:path*", "/counselor/:path*"],
};