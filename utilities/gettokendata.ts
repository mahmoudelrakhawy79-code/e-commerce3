
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers"

export async function gettokendata() {
    const cookie = await cookies();
    const nextauthtoken = cookie.get('next-auth.session-token')?.value
    const accesstoken = await decode({
        secret: process.env.NEXTAUTH_SECRET!,
        token: nextauthtoken
    })
    return accesstoken?.token;
}
