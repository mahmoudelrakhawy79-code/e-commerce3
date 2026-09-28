import { authOptions } from "@/next-auth/authOptions";
import NextAuth from "next-auth";
const handelr = NextAuth(authOptions);
export { handelr as GET, handelr as POST }