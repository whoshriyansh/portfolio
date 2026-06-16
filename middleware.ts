import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyRequestAuth } from "@/lib/auth-edge";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthenticated = await verifyRequestAuth(request);

  if (pathname.startsWith("/server/compose")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/server", request.url));
    }
  }

  if (pathname.startsWith("/api/blogs")) {
    const method = request.method;
    if (method === "POST" || method === "DELETE" || method === "GET") {
      if (!isAuthenticated) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/server/compose/:path*", "/api/blogs", "/api/blogs/:path*"],
};
