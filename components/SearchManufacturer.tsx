"use client"
import { SearchManufacturerPros } from '@/types'
import React, { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerPros) => {
    const [query, setQuery] = useState("")
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className="absolute top-[14px]">

                        {/* Cambiar Logo*/}
                        <Image
                            src="/car-logo.svg"
                            alt="cafe logo"
                            width={20}
                            height={20}
                        />

                    </Combobox.Button>

                    <Combobox.Input className="search-manufacturer__input"
                        placeholder='Capuchino Vainilla'
                        displayValue={(manufacturer: string) => (manufacturer)}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}>

                        <Combobox.Options>

                        </Combobox.Options>

                    </Transition>


                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer