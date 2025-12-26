"use client"

import useMenu from '@/hooks/useMenu.hook'
import React, { FC, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'
import {motion} from "motion/react"


const MenuToggle: FC<React.HTMLAttributes<HTMLElement>> = ({className, ...props}) => {

    const {menuOpen, setMenuOpen} = useMenu()
    const ref = useRef<HTMLButtonElement>(null)
  
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }
 
  return (
   
        <button
            ref = {ref}
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="menu"
            aria-haspopup="menu"
            aria-label={menuOpen ? 'close menu' : 'open menu'}
            className={twMerge(className, "rounded-full bg-white flex xl:hidden justify-center items-center z-50 fixed top-3 right-3 sm:top-5 sm:right-5")}
            {...props}
        >
            <UpdateFollowerWrapper className='sm:p-2 cursor-pointer' mouseOptions={{
                scale: 5,
                mixBlendMode: "difference",
                backgroundColor: "white",
                customPosition: ref
            }}>
                <svg
                    className='max-sm:scale-75 relative'
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                >
                    
                    <motion.rect
                         animate = {{originX: 0.5, originY:0.5, y:menuOpen?5:0, rotate:menuOpen?45:0, scaleY:menuOpen?1.15:1}}
                         transition={{ease:"easeInOut", duration:.4}}
                         x="5.5" y="11" width="24" height="2" fill="var(--color-slate-700)" />
                    <motion.rect 
                        animate = {{ originX: 0.5, originY:0.5, y:menuOpen?-5:0, rotate:menuOpen?-45:0, scaleY:menuOpen?1.15:1}}
                        transition={{ease:"easeInOut", duration:.4}}
                        x="5.5" y="21" width="24" height="2" fill="var(--color-slate-700)" />
                    
                </svg>
             </UpdateFollowerWrapper>
            </button>


  )
}

export default MenuToggle
