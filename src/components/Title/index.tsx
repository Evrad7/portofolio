import React from 'react'
import { twMerge } from 'tailwind-merge'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'

const Title = ({text, color = "gold", className}:{text:string, color?: "gray" | "gold", className?: string}) => {
  const bgColor = color === "gold"? "bg-gold" : "bg-[#4b4a49]"
  const toColor = color === "gold"? "bg-gold" : "bg-[#4b4a49]"
  return (
    <div className= {twMerge(className, 'flex gap-x-2 sm:gap-x-3 xl:gap-x-6 items-center pl-2 sm:pl-4 py-1')}>
      <UpdateFollowerWrapper mouseOptions={{scale:6, mixBlendMode: "difference", backgroundColor:"white"}}>
        <div className={twMerge(`size-6 sm:size-12 xl:size-16  rounded-full bg-radial-[at_0%_20%] from-white`, bgColor, toColor)}></div>
      </UpdateFollowerWrapper>
        <h1 className='uppercase text-xl sm:text-4xl xl:text-[4rem] font-bold'>{text}</h1>
    </div>
  )
}

export default Title