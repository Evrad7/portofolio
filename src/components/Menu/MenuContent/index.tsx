"use client"

import { Fragment, useEffect, useRef } from "react"
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