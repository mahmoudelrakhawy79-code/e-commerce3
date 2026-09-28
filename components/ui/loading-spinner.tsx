import React from 'react'
import { Spinner } from "@/components/ui/spinner"

interface LoadingSpinnerProps {
    isLoading: boolean
    children: React.ReactNode
    size?: string
}

export default function LoadingSpinner({ isLoading, children, size = "size-6" }: LoadingSpinnerProps) {
    if (isLoading) {
        return (
            <div className='w-full flex justify-center items-center py-50'>
                <Spinner className={size} />
            </div>
        )
    }

    return <>{children}</>
}