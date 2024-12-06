import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { decrypt, updateSession } from "./app/lib/session";

export default async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value || ""
  // const payload = await decrypt(session)
  // const updateSessionResult = await updateSession()
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }else {
    return await updateSession(request);
  }
}


// matcher
export const config = {
  matcher: [
    "/",
    "/dashboard/:path*"
  ]
}