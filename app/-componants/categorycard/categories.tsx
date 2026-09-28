import { Category } from '@/api/types/typeproduct'
import Link from 'next/link'
import React from 'react'

export default function Categoriecard({ category }: { category: Category }) {
    return (
        <div>
            <Link href={`/category/${category._id}`} className="mx-4 group border border-gray-300 p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1">
                <div className=" px-4 py-4 flex flex-col bg-white rounded-lg drop-shadow overflow-hidden w-full transform transition-transform border-gray-200 border items-center">
                    <img className="aspect-square h-full w-full md:h-40 object-contain group-hover:scale-110 transition-transform duration-500" src={category.image} alt={category.name} />
                    <div className="p-2 md:p-6 h-full flex flex-col md:justify-between">
                        <h3 className="text-sm text-center transition-colors md:text-md font-semibold group-hover:text-green-600 md:mb-2 uppercase text-gray-900 leading-4">
                            {category.name}
                        </h3>
                        <div className='flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity'>
                            <span className=' text-green-600 flex items-center gap-1'>view subcategories</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </div>

                    </div>
                </div>
            </Link>
        </div>
    )
}
