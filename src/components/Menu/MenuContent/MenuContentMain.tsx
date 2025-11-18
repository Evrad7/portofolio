"use client"

import useMenu from '@/hooks/useMenu.hook'
import MenuItem from './MenuItem'
import {motion} from "motion/react"
import useDevice from '@/hooks/useDevice'
import UpdateFollowerWrapper from '@/components/UpdateFollowerWrapper'
import UpdateFollowerWrapperWatchIntro from '@/components/UpdateFollowerWrapperWatchIntro'
import menuItems from './menuItems'



const MenuContentMain = () => {
    // Menu content for hero section and for mobile, main menu
 const {menuOpen} = useMenu()
 const {breakpoints} = useDevice()

  const speedFactor = 1/15
  const animationDelayOnOpen = 0
  const animationDelayOnClose = menuItems.reduce((previous, _, index) => previous + (index+1)*speedFactor, 0) - .5

  return (
    <UpdateFollowerWrapperWatchIntro>
        <motion.div
            animate = {{ 
                display: menuOpen || breakpoints.xl ? "block": "none"
                }}
            transition={{ease: "easeOut", delay: menuOpen || breakpoints.xl? animationDelayOnOpen: animationDelayOnClose }}
            data-state={menuOpen ? 'open' : 'closed'}
            className='fixed xl:absolute top-0 right-0 z-30  xl:right-25 w-full h-full xl:w-auto'>
            <motion.div 
                initial = {{opacity: 0}}
                animate = {{opacity: menuOpen || breakpoints.xl ? 1: 0 }}
                transition={{ duration: .3, ease: "easeOut", delay: menuOpen || breakpoints.xl ? animationDelayOnOpen: animationDelayOnClose}}
                className='pt-18 xl:pt-0 size-full max-xl:bg-[url(/background-menu-mobile.png)] bg-center bg-cover xl:bg-transparent' >
                    <UpdateFollowerWrapper mouseOptions={{visible: false}} className='xl:pt-0 flex  flex-col sm:justify-center items-center size-full'>
                        <ul  className='flex flex-col gap-y-4 [@media(min-height:640px)]:xl:gap-y-7 w-full max-w-lg xl:max-w-sm px-4'>
                            {menuItems.map( (item, index) => 
                            <motion.li  
                                key = {item.href}
                                initial ={{y: "3rem",opacity: 0}}
                                animate ={{y: breakpoints.xl ? 0: (menuOpen ? 0: "3rem"),opacity:breakpoints.xl ? 1: (menuOpen ? 1: 0)
                                }}
                                transition={{duration: .3, ease: "easeOut", delay: menuOpen || breakpoints ? (index+1)*speedFactor : (menuItems.length - index)*speedFactor}}
                                >
                                <MenuItem data={item}/>
                            </motion.li>
                            )}
                        </ul>
                    </UpdateFollowerWrapper>
        
            </motion.div>
        </motion.div>
    </UpdateFollowerWrapperWatchIntro>
   
  
    
  )
}

export default MenuContentMain
