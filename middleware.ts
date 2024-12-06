import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server' 

// auth checker
import { authChecker } from './lib/middlewares/auth-checker'

export default function middleware(request: NextRequest){
    authChecker(request)
}

