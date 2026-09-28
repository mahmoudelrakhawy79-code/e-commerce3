import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const token = await getToken({ req: req });
    if (!token) return NextResponse.json({ message: 'unauthorized', status: 401 });
    const userToken = (token.token as string) || '';
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: {
            token: userToken,
            'Content-type': 'application/json'
        }
    });

    if (!response.ok) return NextResponse.json({ message: 'unauthorized', status: 401 });
    const payload = await response.json();
    console.log('payload of wishlist', payload);
    return NextResponse.json(payload);
}