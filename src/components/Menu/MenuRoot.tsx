"use client"

import MenuContextProvider from '@/contexts/MenuContext'
import { useInView } from 'motion/react'
import React, {FC, useRef } from 'react'


const MenuRoot: FC<React.HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {margin: "100% 0px 0px 0px", initial: true})

  return (
    <MenuContextProvider isInHeroSection = {isInView}>
      <nav ref ={ref} aria-label={props['aria-label'] ?? 'navigation'} {...props}>
            {children}
        </nav> 
    </MenuContextProvider>
  )
}

export default MenuRoot
