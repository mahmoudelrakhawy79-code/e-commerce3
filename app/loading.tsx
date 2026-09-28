import React from 'react'
import { ClipLoader } from "react-spinners";

export default function loading() {
    return (
        <div className='flex items-center justify-center'>
            <ClipLoader color="#36d7b7" />

        </div>
    )
}
