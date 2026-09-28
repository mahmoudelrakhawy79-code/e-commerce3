// import { Category } from "../types/typeproduct";

// export async function getallcategories(): Promise<Category[]> {
//     try {
//         const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
//         const payload = await response.json();
//         if (!response.ok) throw new Error(' API ERROR')
//         return payload.data

//     } catch (error) {
//         console.log(error);
//         throw new Error(' API ERROR')
//     }
// }
import { Category } from "../types/typeproduct";
export async function getallcategories(): Promise<Category[]> {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
        const payload = await response.json();
        if (!response.ok) throw new Error('api error');
        return payload.data
    } catch {
        throw new Error('api error');
    }
}
export async function getallcategorydetails(categid: string): Promise<Category[]> {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${categid}/subcategories`);
        const payload = await response.json();
        if (!response.ok) throw new Error('api error');
        return payload?.data
    } catch {
        throw new Error('api error');
    }
}