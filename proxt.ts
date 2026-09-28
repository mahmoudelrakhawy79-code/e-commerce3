import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
    const protectedpage = ['/cart', '/wishlist'];
    const authpage = ['/login', '/register'];
    const pathName = req.nextUrl.pathname;
    const mytoken = await getToken({
        req: req,
        secret: process.env.NEXTAUTH_SECRET,
        secureCookie: process.env.NODE_ENV === 'production'
    })
    const accesstoken = mytoken?.token;
    if (!accesstoken && protectedpage.some((path) => pathName.startsWith(path))) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
    if (accesstoken && authpage.some((path) => pathName.startsWith(path))) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }
}
export const config = {
    matcher: [
        '/cart/:path*',
        '/wishlist/:path*',
        '/login/:path*',
        '/register/:path*',
    ]
}