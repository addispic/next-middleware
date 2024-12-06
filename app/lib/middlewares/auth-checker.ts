import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'

// auth checker
export function authChecker(request: NextRequest){
    return NextResponse.redirect(new URL("/login",request.url))
}

// matching path
export const config = {
    matcher: ["/dashboard", "/profile"]
}