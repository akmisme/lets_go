import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(req) {
  // Run i18n middleware first
  const res = intlMiddleware(req);

  const { pathname } = req.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const locale = ["en", "mm"].includes(segments[0]) ? segments[0] : "en";

  // Define protected paths (after locale prefix)
  const protectedPaths = ["accounts", "booking", "history"];

  if (segments.length > 1 && protectedPaths.includes(segments[1])) {
    const token = req.cookies.get("jwtToken"); // if you store JWT in cookies

    if (!token) {
      return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
