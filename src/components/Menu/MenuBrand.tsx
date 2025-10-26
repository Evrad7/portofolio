import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'

const MenuBrand : FC<React.HTMLAttributes<HTMLElement>> = ({className, ...props}) => {
  return (
   <UpdateFollowerWrapper mouseOptions={{backgroundColor: "white", backgroundElement: null,  mixBlendMode: "difference", scale:6 }}>
      <a href="#"   className = {twMerge(className, "flex flex-col gap-y-1 text-gray-200 z-10 absolute  top-5 left-5")} {...props}>
        <span className='text-sm xl:text-base uppercase'>Développeur full stack</span>
        <span className='text-sm'>Evrad Loïc TSOATA</span>
    </a> 
   </UpdateFollowerWrapper> 

  )
}

export default MenuBrand