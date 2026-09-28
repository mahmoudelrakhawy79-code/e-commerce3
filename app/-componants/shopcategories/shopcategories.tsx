import { getallcategories } from '@/api/services/categoriesApi'
import Image from "next/image";

export default async function Shopcategories() {
    const data = await getallcategories();
    console.log('data categories', data);

    return (
        <div className='my-5'>
            <h1 className='text-2xl text-green-600 border-l-4 border-l-black font-bold'>FEATURED PRODUCT</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4'>

                {data.map((category) => {
                    return <div className='category'>
                        <div>
                            <Image className='w-25 h-25 rounded-full' src={category.image} alt={category.name} width={200} height={200} />
                            <h1>{category.name}</h1>
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}
