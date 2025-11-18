"use client"

import MenuContextProvider from '@/contexts/MenuContext'
import { useInView } from 'motion/react'
import React, {FC, useEffect, useRef } from 'react'


const MenuRoot: FC<React.HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {margin: "100% 0px 0px 0px", initial: true})

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <MenuContextProvider isInHeroSection = {isInView}>
      <nav ref ={ref} className='bg-red-500' aria-label={props['aria-label'] ?? 'navigation'} {...props}>
            {children}
        </nav> 
    </MenuContextProvider>
  )
}

export default MenuRoot
