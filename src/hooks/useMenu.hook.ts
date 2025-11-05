"use client"
import { MenuContext, MenuContextType } from "@/contexts/MenuContext"
import { useContext } from "react"

const useMenu : () => MenuContextType = () => {
    
    const context = useContext(MenuContext)
    if (!context){
        throw new Error("useMenu must be used inside a MenuProvider");
    }
    return context
}

export default useMenu