'use client'

import { CafeProps } from '@/types'
import { useState } from 'react'
import Image from 'next/image'
import { CustomButtom } from './CustomButtom'

interface CafeCardProps {
    cafe : CafeProps
}


const CafeCard = ( {cafe} : CafeCardProps) => {
  return (
    <div>CafeCard</div>
  )
}

export default CafeCard