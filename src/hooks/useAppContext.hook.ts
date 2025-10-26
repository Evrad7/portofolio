"use client"
import { AppContext, AppContextType } from "@/app/contexts/AppContext";
import { useContext } from "react"

const useAppContext : () => AppContextType = () => {
    
    const context = useContext(AppContext)
    if (!context){
        throw new Error("useMenu must be used inside a AppContextProvider");
    }
    return context
}

export default useAppContext