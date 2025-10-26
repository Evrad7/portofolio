"use client"

import useMenu from '@/hooks/useMenu.hook'
import React from 'react'
import MenuItem from './MenuItem'
import {motion} from "motion/react"
import useDevice from '@/hooks/useDevice'
import UpdateFollowerWrapper from '@/components/UpdateFollowerWrapper'
import UpdateFollowerWrapperWatchIntro from '@/components/UpdateFollowerWrapperWatchIntro'

export type MenuItemType = {
    href: string,
    title: string,
    subItems: Array<string>,
    animationDelayOnOpen?: number,
    animationDelayOnClose?: number
}
type MenuItemsType = Array<MenuItemType>


 const items : MenuItemsType= [
    {
        href: "skills",
        title: "Competences",
        subItems: [
            "développement frontent et backend", 
            "orchestration et data",
            "technologies cloud"
        ]
    },
     {
        href: "projects",
        title: "Quelques projets personnels",
        subItems: [
            "Présentation d'activité d'entreprise", 
            "Vente en ligne",
            "Réseau social, etc."
        ]
    },
     {  
        href: "certificate",
        title: "Certifications",
        subItems: [
            "Certifications Cloud", 
            "Certifications Docker",
            "Certifications développement"
        ]
    },
    //  {
    //     href: "reference",
    //     title: "Quelques références",
    //     subItems: [
    //         "Claudine Chaplais", 
    //         "Yassine ....",
    //         "Estephania Delgadillo"
    //     ]
    // },
     {
        href: "experience-and-education",
        title: "Expérences professionnelle et formations",
        subItems: [
            "Expériences en extreprise", 
            "Niveau d'étude"
        ]
    },
     {
        href: "contact",
        title: "Entrons en contact",
        subItems: [
            "Formulaire de contact",
            "LinkedIn, Email, Tel, Github"
        ]
    }
  ]


const MenuContent = () => {
 const {menuOpen} = useMenu()
 const {breakpoints} = useDevice()

  const speedFactor = 1/15
  const animationDelayOnOpen = 0
  const animationDelayOnClose = items.reduce((previous, _, index) => previous + (index+1)*speedFactor, 0) - .5

  return (
    <UpdateFollowerWrapperWatchIntro>
        <motion.div
            className={`fixed right-0 z-20 w-full h-full xl:w-auto xl:absolute  xl:right-25 xl:block xl[--menu-open:]`}
            animate = {{ 
                display: menuOpen || breakpoints.xl ? "block": "none"
                }}
            transition={{ease: "easeOut", delay: menuOpen || breakpoints.xl? animationDelayOnOpen: animationDelayOnClose }}
            data-state={menuOpen ? 'open' : 'closed'}>
        <motion.div 
            initial = {{
                opacity: 0
            }}
            animate = {{
                opacity: menuOpen || breakpoints.xl ? 1: 0 ,
            }}
         transition={{ duration: .3, ease: "easeOut", delay: menuOpen || breakpoints.xl ? animationDelayOnOpen: animationDelayOnClose}}
        className='pt-18 xl:pt-0 h-full max-xl:bg-[url(/background-menu-mobile.png)] bg-center bg-cover xl:bg-transparent' >
            <div className='xl:pt-0 flex  flex-col sm:justify-center items-center h-full w-full'>
                <UpdateFollowerWrapper mouseOptions={{visible: false}} >
                     <ul className='flex flex-col gap-y-4 [@media(min-height:640px)]:xl:gap-y-7 w-full max-w-lg xl:max-w-sm px-4'>
                        {items.map( (item, index) => 
                        <motion.li  
                            key = {item.href}
                            initial ={{
                                y: "3rem",
                                opacity: 0
                            }}
                            animate ={{
                                y: breakpoints.xl ? 0: (menuOpen ? 0: "3rem"),
                                opacity:breakpoints.xl ? 1: (menuOpen ? 1: 0)
                            }}
                            transition={{duration: .3, ease: "easeOut", delay: menuOpen || breakpoints ? (index+1)*speedFactor : (items.length - index)*speedFactor}}
                            >
                            <MenuItem data={item}/>
                        </motion.li>
                        )}
                     </ul>
                </UpdateFollowerWrapper>
               
            </div>
        
        </motion.div>
    </motion.div>
    </UpdateFollowerWrapperWatchIntro>
   
  
    
  )
}

export default MenuContent
