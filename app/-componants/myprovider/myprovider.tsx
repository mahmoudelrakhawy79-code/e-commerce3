'use client'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

export default function Myprovider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
