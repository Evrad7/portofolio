"use client"
import React, { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'
import useMenu from '@/hooks/useMenu.hook'
import {motion} from "motion/react"

const MenuBrand : FC<React.HTMLAttributes<HTMLElement>> = ({className}) => {
  const {isInHeroSection} = useMenu()
  if(isInHeroSection){
    return(
      <UpdateFollowerWrapper mouseOptions={{backgroundColor: "white", backgroundElement: null,  mixBlendMode: "difference", scale:6 }}>
        <a href="#"   className = {twMerge(className, "flex flex-col gap-y-1 z-20 absolute text-gray-200 top-3 left-3 sm:top-5 sm:left-5")}>
          <span className='text-sm xl:text-base uppercase'>Développeur full stack</span>
          <span className='text-sm'>Evrad Loïc TSOATA</span>
        </a> 
      </UpdateFollowerWrapper> 
    )
  }
  return (
   <UpdateFollowerWrapper mouseOptions={{visible:false}}>
        <motion.a 
          initial = {{y:-20, opacity:0}}
          animate = {{y:0, opacity: 1}}
          transition={{type:"spring"}}
          href="#"   className = {twMerge(className, "flex flex-col gap-y-1 z-30 fixed text-gray-950 top-5 sm:top-6 xl:top-8 left-5 text-xl sm:text-2xl xl:text-4xl font-tenor")} >
          Evrad7
        </motion.a> 
    </UpdateFollowerWrapper> 
  
  )
}

export default MenuBrand