'use client'
import { deletewishitem } from '@/api/services/deletewishlist';
import Addbtn from '@/app/Addbtn/addbtn';
import { toast } from '@/components/ui/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link';
import React from 'react'

export default function Wishlistcomp() {
    const query = useQueryClient()
    const { data: wishlistdata } = useQuery({
        queryKey: ['getwishlist'],
        queryFn: async () => {
            const request = await fetch(`/api/wishlist`);
            if (!request.ok) throw new Error('api error');
            return request.json();
        }
    })
    console.log('wishlist...!', wishlistdata);
    const { data, mutate: mutatedel } = useMutation({
        mutationFn: deletewishitem,
        onSuccess: () => {
            toast.add({
                type: "success",
                description: "cart is deleted successfuly",
            })
            // get data
            query.invalidateQueries({
                queryKey: ['getwishlist']
            })
        },
        onError: () => {
            toast.add({
                type: "error",
                description: "failed to delete",
            })

        }

    })

    return (
        <div>
            {wishlistdata?.count ? <section className="w-full bg-white dark:bg-[#0A2025] py-9 px-8">
                <h1 className="text-center text-[#191919] dark:text-white text-[32px] font-semibold leading-[38px]">
                    My Shopping wishlist
                </h1>
                <div className="flex items-start mt-8 gap-6">
                    <div className="bg-white p-4 w-[800px] rounded-xl">
                        <table className="w-full bg-white rounded-xl">
                            <thead>
                                <tr className="text-center border-b border-gray-400 w-full text-[#7f7f7f] text-sm font-medium uppercase leading-[14px] tracking-wide">
                                    <th className="text-left px-2 py-2">Product</th>
                                    <th className="px-2 py-2">price</th>
                                    {/* <th className="px-2 py-2">Quantity</th> */}
                                    <th className="px-2 py-2">Actions</th>
                                    <th className="w-7 px-2 py-2" />
                                </tr>
                            </thead>
                            <tbody>
                                {wishlistdata?.data.map((product: any) => {
                                    return <tr key={product._id} className="text-center">
                                        <td className="px-2 py-2 text-left align-top">
                                            <img src={product.imageCover} alt="test" className="w-[100px] mr-2 inline-block h-[100px]" /><span>Green Capsicum</span>
                                        </td>
                                        <td className="px-2 py-2">{product.price} EGP</td>
                                        {/* <td className="p-2 mt-9 bg-white rounded-[170px] border border-[#a0a0a0] justify-around items-center flex">
                                            <svg width={14} height={15} className="cursor-pointer" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.33398 7.5H11.6673" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg><span className="w-10 text-center text-[#191919] text-base font-normal leading-normal">{product.count}</span><svg className="cursor-pointer relative" width={14} height={15} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.33398 7.49998H11.6673M7.00065 2.83331V12.1666V2.83331Z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </td> */}
                                        {/* <td className="px-2 py-2">{product.price * product.count}</td> */}
                                        <td className="px-2 py-2 flex gap-3">

                                            <Addbtn prodid={product._id} cls={'px-8 py-3.5 cursor-pointer bg-green-500 rounded-[43px] text-[#4c4c4c] text-sm font-semibold className  leading-[16px]'} child={<button className='flex gap-4'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                </svg>
                                                <h1>add to cart</h1>
                                            </button>} />
                                            <button onClick={() => { mutatedel(product._id) }} className="px-8 cursor-pointer py-3.5 bg-green-700 rounded-[43px] text-[#4c4c4c] text-sm font-semibold className leading-[16px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                })}

                            </tbody>

                        </table>
                    </div>

                </div>

            </section> : <h1>cart empty</h1>}

        </div>
    )
}
