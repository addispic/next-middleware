"use server";
import {NextRequest,NextResponse} from 'next/server'

// db
import { dbConnectionHandler } from "../db/dbConnection";
// models
// user model
import UserModel from '@/app/models/user-model'
// signup
export async function signup({username, email, password}: {username: string; email: string; password: string}) {
    console.log({username,email,password})
    try{
        await dbConnectionHandler()
        // const isUserExist = await UserModel.fin
        return {message: 'success'}
    }catch(err){
        return {error: 'signup error'}
    }
}
