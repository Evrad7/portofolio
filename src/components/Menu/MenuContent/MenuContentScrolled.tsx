import React from 'react'
import menuItems from './menuItems'
import { UpdateFollower } from 'react-mouse-follower'
import UpdateFollowerWrapper from '@/components/UpdateFollowerWrapper'
import UpdateFollowerLinkWrapper from '@/components/UpdateFollowerLinkWrapper'
import { motion } from 'motion/react'

const MenuContentScrolled = () => {
    // Menu content to show when the user pass the here section
    const activeMenu = "projects"
  return (
      <UpdateFollowerWrapper mouseOptions={{visible: false}}>
      <motion.div 
        initial ={{y:-20, opacity: 0}}
        animate ={{y: 0, opacity: 1}}
        transition = {{type:"spring"}}
        className='fixed left-0 right-0 z-20 w-full py-8 sm:py-10 xl:py-12 bg-white/85 backdrop-blur-[18.5px]'>
      <ul className='hidden xl:flex gap-x-15 text-xl justify-end pr-30 '>
        {menuItems.map((item, index) => (
          <li className='group  py-1 overflow-hidden ' key = {index}>
               <a href={`#${item.href}`} className={`${activeMenu === item.href ? "before:translate-0 before:opacity-100":"before:-translate-4 before:opacity-0"} pr-4 relative before:absolute before:-bottom-2 before:right-0 before:w-1/2 before:h-[5px] before:bg-gold`} >
                 <span className={`${activeMenu === item.href ? "-translate-y-8":"group-hover:-translate-y-8"} text-stone-800  inline-block transition ease-in duration-200`}>{item.title}</span>
                 <span className={`${activeMenu === item.href ? "font-bold ":"translate-y-8 group-hover:translate-y-0"} text-gold absolute top-0 left-0 group-hover:opacity-100 transition ease-in duration-200`}>{item.title}</span>
              </a> 
          </li>
        ))}
    </ul>
    </motion.div>
      </UpdateFollowerWrapper>
    
    
 
  )
}

export default MenuContentScrolled