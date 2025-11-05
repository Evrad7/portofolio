"use client"

import useMenu from '@/hooks/useMenu.hook'
import MenuItem from './MenuItem'
import {motion} from "motion/react"
import useDevice from '@/hooks/useDevice'
import UpdateFollowerWrapper from '@/components/UpdateFollowerWrapper'
import UpdateFollowerWrapperWatchIntro from '@/components/UpdateFollowerWrapperWatchIntro'
import menuItems from './menuItems'



const MenuContentHero = () => {
 const {menuOpen} = useMenu()
 const {breakpoints} = useDevice()

  const speedFactor = 1/15
  const animationDelayOnOpen = 0
  const animationDelayOnClose = menuItems.reduce((previous, _, index) => previous + (index+1)*speedFactor, 0) - .5

  return (
    <UpdateFollowerWrapperWatchIntro className='h-full bg-red-500'>
        <motion.div
            animate = {{ 
                display: menuOpen || breakpoints.xl ? "block": "none"
                }}
            transition={{ease: "easeOut", delay: menuOpen || breakpoints.xl? animationDelayOnOpen: animationDelayOnClose }}
            data-state={menuOpen ? 'open' : 'closed'}
            className='pt-18 xl:pt-0 h-full max-xl:bg-[url(/background-menu-mobile.png)] bg-center bg-cover xl:bg-transparent'>
            <motion.div 
                initial = {{opacity: 0}}
                animate = {{opacity: menuOpen || breakpoints.xl ? 1: 0 }}
                transition={{ duration: .3, ease: "easeOut", delay: menuOpen || breakpoints.xl ? animationDelayOnOpen: animationDelayOnClose}}
                className='' >

                <div className={`'xl:pt-0 flex  flex-col sm:justify-center items-center h-full w-full`}>
                    <UpdateFollowerWrapper mouseOptions={{visible: false}} >
                        <ul  className='flex flex-col gap-y-4 [@media(min-height:640px)]:xl:gap-y-7 w-full max-w-lg xl:max-w-sm px-4'>
                            {menuItems.map( (item, index) => 
                            <motion.li  
                                key = {item.href}
                                initial ={{y: "3rem",opacity: 0}}
                                animate ={{y: breakpoints.xl ? 0: (menuOpen ? 0: "3rem"), opacity:breakpoints.xl ? 1: (menuOpen ? 1: 0)}}
                                transition={{duration: .3, ease: "easeOut", delay: menuOpen || breakpoints ? (index+1)*speedFactor : (menuItems.length - index)*speedFactor}}
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

export default MenuContentHero
