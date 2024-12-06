import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { decrypt } from "./app/lib/session";

export default async function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value || ""
  const payload = await decrypt(session)
  if(!payload){
    return NextResponse.redirect(new URL("/login", request.url))
  }
}


// matcher
export const config = {
  matcher: [
    "/",
    "/dashboard/:path*"
  ]
}