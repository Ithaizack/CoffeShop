'use client'

import Image from "next/image";

export default function Logo(){
    return (
        <Image alt="Logo" src={require('@/public/LogoNav.png')} className="h-[100%] w-16" />
    )
}