import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { jwtDecode } from 'jwt-decode';
export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: 'mylogin',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'enter your email' },
                password: { label: 'password', type: 'password', placeholder: 'enter your password' },
            },
            async authorize(credentials) {
                const response = await fetch(`${process.env.API}auth/signin`, {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }

                })
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const payload = await response.json();
                console.log("payload...", payload);
                const userdata: { id: string } = jwtDecode(payload.token);

                return {
                    id: userdata.id,
                    email: payload.user.email,
                    name: payload.user.name,
                    token: payload.token,
                }
            }
        })
    ],
    callbacks: {
        jwt({ user, token }) {
            if (user) {
                token.id = user.id;
                token.token = user.token
            }
            return token
        },
        session({ session, token }) {
            if (token) {
                session.user.id = token.id as string;
            }
            return session;
        }
    },

    pages: {
        signIn: '/login'
    }
}


