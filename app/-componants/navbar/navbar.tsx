"use client"

import * as React from "react"
import Link from "next/link"
import {
    CircleAlertIcon,
    CircleCheckIcon,
    CircleDashedIcon,
} from "lucide-react"
import logo from '../../../assets/images/freshcart-logo.svg'
import Image from "next/image";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@base-ui/react"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"
import { Cartresponsetype } from "@/api/types/carttype"
import { useQuery } from "@tanstack/react-query"



export default function Navbar() {
    const { data: cartdata, isLoading } = useQuery<Cartresponsetype>({
        queryKey: ['getcart'],
        queryFn: async () => {
            const response = await fetch(`/api/cart`)
            if (!response.ok) throw new Error('failed to fetch')
            return response.json();
        }
    })
    console.log('cart data ....', cartdata);

    function handelelogout() {
        signOut({ redirect: true, callbackUrl: '/login' })
    }
    const { data: sessiondata, status } = useSession();
    // console.log(session);

    return (
        <NavigationMenu className='bg-gray-100 max-w-full p-5 sticky top-0 z-50'>
            <NavigationMenuList className='justify-between'>
                <Image src={logo} alt='fresh' />

                <div className="md:flex gap-6 hidden">
                    <NavigationMenuItem>
                        <Link className=" font-semibold hover:text-green-800" href='/'>home</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className=" font-semibold hover:text-green-800" href='/shop'>shop</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className=" font-semibold hover:text-green-800" href='/categories'>categories</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link className=" font-semibold hover:text-green-800" href='/brands'>brands</Link>
                    </NavigationMenuItem>
                </div >

                <div className="md:flex gap-6 items-center hidden">
                    {status === 'authenticated' ? <>   <Link href='/cart'>
                        <span>{cartdata?.numOfCartItems}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </Link>
                        <Link href='/wishlist'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </Link>
                        <Button onClick={handelelogout} className='bg-green-600 text-white rounded-md py-2 px-3'><span>LOG OUT</span></Button></> : <Button className='bg-green-600 text-white rounded-md py-2 px-3'><Link href='/login'>sign in</Link></Button>}

                </div>




                <NavigationMenuItem className='md:hidden'>
                    <NavigationMenuTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="w-96">
                            <Link href="/" title="home">
                                home
                            </Link>
                            <Link href="/brands" title="brands">
                                brands
                            </Link>
                            <Link href="/categories" title="categories">
                                categories
                            </Link>
                            <Link href="/shop" title="shop">
                                shop
                            </Link>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList >
        </NavigationMenu >
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink render={<Link href={href}><div className="flex flex-col gap-1 text-sm">
                <div className="leading-none font-medium">{title}</div>
                <div className="line-clamp-2 text-muted-foreground">{children}</div>
            </div></Link>} />
        </li>
    )
}
