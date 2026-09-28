import { getallcategorydetails } from '@/api/services/categoriesApi';
import React from 'react'
import Categorydetailscard from '../categorydetailscard';

export default async function Catydetails({ params }: { params: Promise<{ categid: string }> }) {
    const { categid } = await params;
    const data = await getallcategorydetails(categid);
    console.log('caategorydetails', data);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10'>
            {data?.map((categ) => {
                return <div>
                    <a href="#" className="group flex flex-col  p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8  lg:space-y-0 lg:space-x-6">
                        <div className="flex items-center justify-center w-16 h-16 bg-green-100  border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                        </div>

                        <h1 className='font-bold py-7'>{categ.name}</h1>
                        <div className='flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity'>
                            <span className='text-green-600 flex items-center gap-1'>view products</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-green-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>

                        </div>
                    </a>
                </div>
            })}
        </div>
    )
}
