import {SignJWT, jwtVerify} from 'jose'

// secret
const secretKey = process.env.SECRET_KEY;
// encoded key
const encodedKey = new TextEncoder().encode(secretKey)

// encrypt
export async function encrypt(payload: any){
    return new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime("1h from now")
        .sign(encodedKey)
}

// decrypt
export async function decrypt(session: string){
    try{
        const {payload} = await jwtVerify(session,encodedKey,{
            algorithms: ['HS256']
        })
        return payload
    }catch(err){
        console.log(err)
    }
}