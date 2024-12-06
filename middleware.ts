import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server' 

export default function middleware(request: NextRequest){
    if(request.nextUrl.pathname.startsWith("/about")){
        return NextResponse.rewrite(new URL("/dashboard",request.url))
    }
    if(request.nextUrl.pathname.startsWith("/login")){
        console.log("login")
    }
}
