"use client"

import { useInView } from "motion/react"
import { Fragment, useEffect, useRef } from "react"
import { inView } from "motion"
import useDevice from "@/hooks/useDevice"
import useMenu from "@/hooks/useMenu.hook"
import MenuContentMain from "./MenuContentMain"
import MenuContentScrolled from "./MenuContentScrolled"



const MenuContent = () => {
    const {isInHeroSection} = useMenu()
    const {breakpoints} = useDevice()
    
    return (
        <Fragment>
            {(isInHeroSection || !breakpoints.xl) && <MenuContentMain/>}
            {!isInHeroSection && <MenuContentScrolled/>}
             
        </Fragment>

    )

}

export default MenuContent