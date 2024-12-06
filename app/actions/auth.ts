"use server";
import bcrypt from 'bcryptjs'

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
        const isUsernameExist = await UserModel.findOne({username})
        if (isUsernameExist) {
          return { usernameError: "username already exist" };
        }
        const isEmailExist = await UserModel.findOne({email})
        if(isEmailExist){
            return {emailError: "email address already exist"}
        }
        await UserModel.create({username,email,password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))})
        return {message: 'success'}
    }catch(err){
        return {error: 'signup error'}
    }
}
