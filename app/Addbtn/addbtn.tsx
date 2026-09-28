'use client'
import { addcart } from '@/api/services/actions/addcart/addcart'
import { toast } from '@/components/ui/toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { ReactNode } from 'react'

export default function Addbtn({ cls, child, prodid }: { cls: string, child: ReactNode, prodid: string }) {
    const query = useQueryClient()

    async function handleaddtocart() {
        mutate(prodid)
        // try {
        //     const data = await addcart(prodid);
        //     if (data?.message === 'Product added successfully to your cart') {
        //         toast.add({
        //             type: "success",
        //             description: "product is added to cart",
        //         })
        //     } else {
        //         toast.add({
        //             type: "error",
        //             description: "login first",
        //         })
        //     }
        // } catch (error) {
        //     toast.add({
        //         type: "error",
        //         description: "login first",
        //     })
        // }
    }
    const { data, mutate } = useMutation({
        mutationFn: addcart,
        onSuccess: () => {
            toast.add({
                type: "success",
                description: "product is added to cart",
            })
            query.invalidateQueries({
                queryKey: ['getcart']
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
        <div>
            <button onClick={handleaddtocart} className={cls}>
                {child}
            </button>

        </div>
    )
}
