"use client"

import { useInView } from "motion/react";
import { createContext, useState } from "react";

export type MenuContextType = {
    menuOpen: boolean,
    setMenuOpen: (menuOpen: boolean) => void,
    isInHeroSection: boolean
}

const  MenuContext = createContext<MenuContextType | undefined>(undefined)

const MenuContextProvider = ({children, isInHeroSection}: {children: React.ReactNode, isInHeroSection: boolean}) =>{
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    return (
        <MenuContext.Provider value={{menuOpen, setMenuOpen, isInHeroSection}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider
export {MenuContext}