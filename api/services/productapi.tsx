import { ProductType } from "../types/typeproduct";

export default async function getallpost(brandid?: string): Promise<ProductType[]> {
    try {
        const url = brandid ? `https://ecommerce.routemisr.com/api/v1/products?brand=${brandid}` : `https://ecommerce.routemisr.com/api/v1/products`
        const response = await fetch(url);
        const payload = await response.json();
        if (!response.ok) throw new Error(' API ERROR')
        return payload.data
    } catch (error) {
        console.log(error);
        throw new Error(' API ERROR')
    }
}
export async function getsingleproduct(prodid: string): Promise<ProductType> {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${prodid}`);
        const payload = await response.json();
        if (!response.ok) throw new Error(' API ERROR')
        return payload.data
    } catch (error) {
        console.log(error);
        throw new Error(' API ERROR')
    }
}
export async function getspacificbrand(brandid: string) {
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${brandid}`)
    const payload = await response.json();
    // if (!response.ok) throw new Error('Api Error')
    console.log('payload.....!!', payload);

}