'use server'

import { gettokendata } from "@/utilities/gettokendata"

export async function addwishlist(prodid: string) {
    const tokenData = await gettokendata();
    const token = typeof tokenData === 'string' ? tokenData : (tokenData as any)?.token;
    if (!token) {
        throw new Error('unauthorized')
    }
    const usertoken = (token as string || undefined)
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            method: 'POST',
            body: JSON.stringify({
                productId: prodid
            }),
            headers: {
                token: token,
                'Content-type': 'application/json',
            }
        });
        if (!response.ok) throw new Error('api error');
        const payload = await response.json();
        return payload;
    } catch (error) {
        throw new Error('api error')
    }
}