
import React from 'react'
import Checkoutform from '../checkoutform'
type props = {
    params: {
        cartid: string
    }
}
export default async function Checkout(props: props) {
    const params = await props.params;
    const { cartid } = params;
    return (
        <div>
            <Checkoutform cartid={cartid} />

        </div>
    )
}
