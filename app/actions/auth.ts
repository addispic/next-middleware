"use server";
// signup
export async function signup({username, email, password}: {username: string; email: string; password: string}) {
    console.log({username,email,password})
  console.log("signup");
}
