import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
export let Schema = zod.object({
    name: zod.string().nonempty('name is required').min(4, 'min letters is 4').max(8, 'max letters is 8'),
    email: zod.string().nonempty('email is required').email('invalid  email'),
    password: zod.string().nonempty('password required').regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, 'invalid password'),
    rePassword: zod.string().nonempty('repassword is required'),
    phone: zod.string().nonempty('password required').regex(/^01[0125][0-9]{8}$/, 'invalid phone number'),
}).refine((obj) => {
    if (obj.password == obj.rePassword) {
        return true;
    }
}, { path: ['rePassword'], message: 'pass && repass is not match' })