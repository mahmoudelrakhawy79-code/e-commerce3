'use client'
import React from 'react'
import Categoriecard from '../-componants/categorycard/categories'
import { getallcategories } from '@/api/services/categoriesApi'
import { useQuery } from '@tanstack/react-query'
import { Spinner } from "@/components/ui/spinner"
import LoadingSpinner from '@/components/ui/loading-spinner'

export default function Categories() {
    const { data: categoriesdata, isLoading } = useQuery({
        queryKey: ['categorydata'],
        queryFn: getallcategories
    })
    console.log('category....', categoriesdata)

    return (
        <LoadingSpinner isLoading={isLoading}>

            <div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {categoriesdata?.map((category) => { return <Categoriecard key={category._id} category={category} /> })}
                </div>

            </div>
        </LoadingSpinner>
    )
}
