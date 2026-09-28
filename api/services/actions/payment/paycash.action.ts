'use server'

import { shippingdata } from "@/app/checkout/checkoutform";
import { gettokendata } from "@/utilities/gettokendata"



export async function paycash(cartid: string, shippingAddress: shippingdata) {
    const tokenData = await gettokendata();
    const token = typeof tokenData === 'string' ? tokenData : (tokenData as any)?.token;
    if (!token) {
        throw new Error('User is not authenticated');
    }
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartid}`, {
            method: 'POST',
            body: JSON.stringify({
                shippingAddress: shippingAddress
            }),
            headers: {
                token: token,
                'Content-type': 'application/json'
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
