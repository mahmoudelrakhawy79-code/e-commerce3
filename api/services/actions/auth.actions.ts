'use server'
import { logindata } from "@/app/(auth)/login/page";
import { userdata } from "@/app/(auth)/register/page"
import { cookies } from "next/headers";
export async function userregister(data: userdata) {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        })
        const payload = await response.json();
        console.log("payload", payload);

        return response.ok
    } catch (error) {
        console.log(error)
    }
}
// export async function userlogin(data: logindata) {
//     try {
//         const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }

//         })

//         const payload = await response.json();
//         console.log("payload", payload);

//         if (response.ok) {
//             const cookie = await cookies();
//             cookie.set('usertoken', payload.token, {
//                 httpOnly: true,

//             });
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
