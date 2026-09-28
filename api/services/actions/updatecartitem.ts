'use server'

import { gettokendata } from "@/utilities/gettokendata"



export async function updatecart({ count, prodid }: { prodid: string, count: number }) {
    const tokenData = await gettokendata();
    const token = typeof tokenData === 'string' ? tokenData : (tokenData as any)?.token;
    if (!token) {
        throw new Error('User is not authenticated');
    }
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${prodid}`, {
            method: 'PUT',
            body: JSON.stringify({
                count: count
            }),
            headers: {
                token: token,
                'Content-type': 'application/Json'
            }
        })
        if (!response.ok) throw new Error('Unauthorized');
        const payload = await response.json();
        console.log(payload);
        return payload;
    } catch (error) {
        throw new Error('Unauthorized');

    }

}
