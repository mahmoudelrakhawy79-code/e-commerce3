import React from 'react'
import getallpost from '@/api/services/productapi'
import Productcard from '../productcard/productcard'
export default async function Featuredproduct({ brandid }: { brandid?: string }) {

    const data = await getallpost(brandid);
    console.log('brandsnum', data);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {data.length ? data.map((product) => { return < Productcard key={product._id} product={product} /> }) : <>
                <div className="col-span-full text-center py-50">
                    <p className="text-gray-900 text-lg font-bold">
                        No Products Found
                    </p>
                </div>
            </>}
        </div>
    )
}
