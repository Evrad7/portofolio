"use client"

import { createContext, useState } from "react";

export type MenuContextType = {
    menuOpen: boolean,
    setMenuOpen: (menuOpen: boolean) => void
}

const  MenuContext = createContext<MenuContextType | undefined>(undefined)

const MenuContextProvider = ({children}: {children: React.ReactNode}) =>{
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    return (
        <MenuContext.Provider value={{menuOpen, setMenuOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider
export {MenuContext}