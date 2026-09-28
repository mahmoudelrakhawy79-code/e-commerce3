import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest) {
    const resp = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
    const payload = await resp.json();
    return NextResponse.json(payload)
}