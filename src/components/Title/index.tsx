import React from 'react'
import { twMerge } from 'tailwind-merge'

const Title = ({text, className}:{text:string, className?: string}) => {
  return (
    <div className= {twMerge(className, 'flex gap-x-2 sm:gap-x-3 xl:gap-x-6 items-center py-1 ')}>
        <div className='size-6 sm:size-12 xl:size-16 bg-gold rounded-full bg-radial-[at_0%_20%] from-white to-gold'></div>
        <h1 className='uppercase text-xl sm:text-4xl xl:text-[4rem] font-bold'>{text}</h1>
    </div>
  )
}

export default Title