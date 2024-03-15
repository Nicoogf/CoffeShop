"use client"

import Image from 'next/image'
import { CustomButtom } from '.'

const Hero = () => {

    const handleScroll = () => {

    }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    El secreto para un buen dia es arrancar con un buen cafe
                </h1>

                <p className='hero__subtitle'>
                    pequeños instantes convertidos en grandes placeres
                </p>

                <CustomButtom
                    title="Ver Promociones"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll} />
            </div>
        </div>
    )
}

export default Hero