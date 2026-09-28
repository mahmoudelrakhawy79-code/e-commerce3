import NextAuth from "next-auth"

declare module "next-auth" {
    interface User {
        token: string,
    }
    interface Session {
        user: {
            /** The user's postal address. */
            name: string,
            email: string,
            id: string,
            address?: string
        }
    }
}