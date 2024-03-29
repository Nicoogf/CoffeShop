import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import CustomButtom from './CustomButtom';

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    {/* Corregir Logo */}
                    <Image
                        src="/logo.svg" alt="Cafe Logo" width={118}
                        height={18}
                        className='object-contain' />
                </Link>

                <CustomButtom
                    title="Sing In"
                    btnType="button"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]" />
            </nav>
        </header>
    )
}

export default Navbar