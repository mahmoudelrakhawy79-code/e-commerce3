'use client'
import { addwishlist } from '@/api/services/actions/addwishlist/addwishlist'
import { toast } from '@/components/ui/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { ReactNode } from 'react'

export default function Addwish({ cls, prodid, child }: { cls: string, prodid: string, child: ReactNode }) {
    const query = useQueryClient()
    function handeletowishlist() {
        mutate(prodid)
    }
    const { data, mutate } = useMutation({
        mutationFn: addwishlist,
        onSuccess: () => {
            toast.add({
                type: "success",
                description: "wishlist is added to cart",
            })
            // get wishlist
            query.invalidateQueries({
                queryKey: ['getwishlist']
            })
        },
        onError: () => {
            toast.add({
                type: "error",
                description: "login first",
            })
        }
    })
    return (
        <button onClick={handeletowishlist} className={cls}>
            {child}
        </button>
    )
}
