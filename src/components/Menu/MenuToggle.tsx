"use client"

import useMenu from '@/hooks/useMenu.hook'
import React, { FC, useRef } from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import { twMerge } from 'tailwind-merge'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'


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
            className={twMerge(className, "rounded-full bg-white flex xl:hidden justify-center items-center z-50 fixed top-5 right-5")}
            {...props}
        >
            <UpdateFollowerWrapper className='p-1 sm:p-2 cursor-pointer' mouseOptions={{
                scale: 5,
                mixBlendMode: "difference",
                backgroundColor: "white",
                customPosition: ref
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                >
                    <rect x="5.5" y="11" width="24" height="2" fill="black" />
                    <rect x="5.5" y="21" width="24" height="2" fill="black" />
                </svg>
             </UpdateFollowerWrapper>
            </button>


  )
}

export default MenuToggle
