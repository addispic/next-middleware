"use client";
import React, { useState } from "react";
import Link from "next/link";
// icons
import { MdOutlineArrowDropDown } from "react-icons/md";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
// lib
// schema
import { SignupFormSchema } from "@/app/lib/schema/definitions";

// actions
// auth
import { signup } from "@/app/actions/auth";
// interfaces
// signup form error interface
interface SignupFormErrorInterface {
  username?: string[];
  email?: string[];
  password?: string[];
}
export default function SignupForm() {
  // states
  // username
  const [username, setUsername] = useState("");
  //   email
  const [email, setEmail] = useState("");
  // password
  const [password, setPassword] = useState("");
  //   is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  // errors
  const [formErrors, setFormErrors] = useState<SignupFormErrorInterface>({});
  // focus
  const [focus, setFocus] = useState("");

  //   form submitting
  const formSubmitHandler = async () => {
    const validatedFields = SignupFormSchema.safeParse({
      username,
      email,
      password,
    });
    if (!validatedFields.success) {
      setFormErrors(validatedFields.error.flatten().fieldErrors);
    } else {
      setFormErrors({});
        const result = await signup({username,email,password})
        console.log(result)
      
    }
  };
  return (
    <div className="min-w-96 p-5 bg-white rounded-md shadow-lg">
      {/* header */}
      <header className="flex items-center justify-end">
        {/* language toggle */}
        <div className="flex items-center gap-x-0.5 text-sm text-neutral-400 transition-colors ease-in-out duration-150 hover:text-neutral-500 cursor-pointer">
          <span>English(US)</span>
          <MdOutlineArrowDropDown className="text-2xl" />
        </div>
      </header>
      {/* title */}
      <h3 className="my-2.5 text-green-600 text-xl">Create account</h3>
      {/* inputs */}
      <div className="mt-5">
        {/* username */}
        <div className="mb-5">
          <div
            className={`w-full py-1 px-1.5 border rounded-md ${
              focus === "username" || username
                ? "border-green-600"
                : "border-neutral-200"
            }`}
          >
            <input
              className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm border-none"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onFocus={() => {
                setFocus("username");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
          </div>
          {/* error */}
          {formErrors?.username?.length && (
            <div className="px-1.5 text-sm text-red-600">
              {formErrors?.username?.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
          )}
        </div>
        {/* email */}
        <div className="mb-5">
          <div
            className={`w-full py-1 px-1.5 border rounded-md ${
              focus === "email" || email
                ? "border-green-600"
                : "border-neutral-200"
            }`}
          >
            <input
              className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm border-none"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => {
                setFocus("email");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
          </div>
          {/* error */}
          {formErrors?.email?.length && (
            <div className="px-1.5 text-sm text-red-600">
              {formErrors?.email?.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
          )}
        </div>
        {/* password */}
        <div className="mb-5">
          <div
            className={`w-full py-1 px-1.5 border rounded-md flex items-center gap-1.5 ${
              focus === "password" || password
                ? "border-green-600"
                : "border-neutral-200"
            }`}
          >
            <input
              className="w-full focus:outline-none focus:ring-0 bg-transparent text-sm border-none"
              type={isPasswordHide ? "password" : "text"}
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => {
                setFocus("password");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
            <button
              className="text-xl text-neutral-600"
              onClick={() => {
                setIsPasswordHide(!isPasswordHide);
              }}
            >
              {isPasswordHide ? <VscEyeClosed /> : <VscEye />}
            </button>
          </div>
          {/* error */}
          {formErrors?.password?.length && (
            <div className="px-1.5 text-sm text-red-600">
              {formErrors?.password?.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
          )}
        </div>
        {/* button */}
        <button
          onClick={formSubmitHandler}
          className="my-7 w-full flex items-center justify-center py-1.5 text-sm text-white bg-green-600 rounded-md overflow-hidden transition-colors ease-in-out duration-150 hover:bg-green-500"
        >
          <span>Signup</span>
        </button>
        {/* link */}
        <p className="w-full text-sm text-neutral-500">
          Already have an account ?{" "}
          <Link
            className="font-medium transition-colors ease-in-out duration-150 hover:text-green-600 hover:underline"
            href={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
