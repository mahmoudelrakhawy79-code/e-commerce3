'use client'
import { Button } from '@base-ui/react/button'
import { Input } from "@/components/ui/input"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,

    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { paycash } from '@/api/services/actions/payment/paycash.action'
import { toast } from '@/components/ui/toast'
import { useRouter } from 'next/navigation'

export default function Checkoutform({ cartid }: { cartid: string }) {
    const router = useRouter();
    const { handleSubmit, control } = useForm<shippingdata>({
        defaultValues: {


            details: "Test address",
            phone: "01000000000",
            city: "Cairo",
            postalCode: "12345"

        }
    })
    async function submitform(data: shippingdata) {
        const payload = await paycash(cartid, data)
        console.log(payload);
        if (payload.status === 'success') {
            toast.add({
                type: "success",
                description: "order created successfully",
            })
            router.push('/')
        } else {
            toast.add({
                type: "error",
                description: "order failed ",
            })
        }

    }
    return (
        <div className='w-1/2 mx-auto my-10 p-10'>
            <h1>checkout</h1>
            <form onSubmit={handleSubmit(submitform)}>
                <div className='flex flex-col gap-6'>

                    <Controller
                        name="details"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>details</FieldLabel>
                                <Input
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="ENTER YOUR details"
                                    autoComplete="on"
                                />

                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    <Controller
                        name="phone"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>phone</FieldLabel>
                                <Input
                                    type='text'
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="ENTER YOUR phone"
                                    autoComplete="on"
                                />

                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Controller
                        name="city"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>city</FieldLabel>
                                <Input
                                    type='text'
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="ENTER YOUR city"
                                    autoComplete="on"
                                />

                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <Controller
                        name="postalCode"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>postalCode</FieldLabel>
                                <Input
                                    type='text'
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="ENTER YOUR postalCode"
                                    autoComplete="on"
                                />

                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                </div>
                <Button type='submit' className='w-full bg-green-600 '>CREATE ORDER</Button>
            </form>
        </div>
    )
}
export interface shippingdata {
    details: string,
    phone: string,
    city: string
    postalCode: string
}