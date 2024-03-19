'use client'

import { CafeProps } from '@/types'
import { useState } from 'react'
import Image from 'next/image'
import CustomButtom from './CustomButtom'

interface CafeCardProps {
    cafe: CafeProps
}


const CafeCard = ({ cafe }: CafeCardProps) => {
    const { id, nombre, precio, imagen, categoria, transimission } = cafe
    return (

        <div className='car-card group'>
            <div className='car-card__content'>
                <h2 className='car-card__content-title'>
                    {nombre} {categoria}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] font-extrabold'>
                <span className='self-start text-[14px] font-semibold'> $ </span>
                {precio}
                <span className='self-start text-[14px] font-semibold'> Por Unidad </span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src="/hero.png"
                    height={160}
                    width={160}
                    alt='cafe variedad'
                    priority
                    className='object-contain mx-auto w-[70%]' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="./steering-wheel.svg" width={20} alt="sterring wheel" height={20} />
                        <p className='text-[14px]'>
                            {transimission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="./tire.svg" width={20} alt="sterring wheel" height={20} />
                        <p className='text-[14px]'>
                            {transimission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src="./gas.svg" width={20} alt="sterring wheel" height={20} />
                        <p className='text-[14px]'>
                            {transimission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                </div>

                <div className='car-card__btn-container'>
                    <CustomButtom title="Comprar"
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue' 
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={()=>setIsOpen(true)}/>
                    
                </div>

            </div>
        </div>
    )
}

export default CafeCard