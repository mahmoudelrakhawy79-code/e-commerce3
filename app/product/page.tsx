import React from 'react'
import Featuredproduct from '../-componants/featureproduct/featuredproduct';

export default async function Product({ searchParams }: { searchParams: Promise<{ brand?: string }> }) {
    const { brand: brandid } = await searchParams;
    return (
        <div className='mt-10'>
            <Featuredproduct brandid={brandid} />

        </div>
    )
}
