"use client"

import MenuContextProvider from '@/contexts/MenuContext'
import React, {FC } from 'react'


const MenuRoot: FC<React.HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {

  return (
    <MenuContextProvider>
          <nav aria-label={props['aria-label'] ?? 'navigation'} {...props}>
            {children}
        </nav> 
    </MenuContextProvider>
  )
}

export default MenuRoot
