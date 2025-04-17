import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {


//   const isAbout = request.url.includes("/about");
//   if (isAbout) {
//     if (true) return NextResponse.next();
//   }

  return NextResponse.redirect(new URL("/home", request.url));
}
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};
