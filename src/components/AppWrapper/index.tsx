"use client"

import AppContextProvider from "@/contexts/AppContext"
import useDevice from "@/hooks/useDevice"
import {useEffect, useRef } from "react"
import { MouseFollower } from "react-mouse-follower"


const AppWrapper = ({children}: {children: React.ReactNode}) => {
   const {isDesktop} = useDevice()
   
   const refOverlay = useRef<HTMLDivElement>(null)

   useEffect(() =>{
      if(isDesktop){
         setTimeout(() => {
         refOverlay?.current?.classList.add("hidden")
         const event = new MouseEvent('mouseenter', {
         bubbles: true,
         cancelable: true,
         view: window,
      });
      document.body.dispatchEvent(event);
      }, 100);
      }
    
   }, [isDesktop])

   if (isDesktop){
      return (
         <AppContextProvider>
            <MouseFollower  />
               <div ref = {refOverlay} className="h-dvh w-full fixed top-0 left-0 z-50"></div>
             {children}
         </AppContextProvider> 
      )
   }
   return <AppContextProvider>{children}</AppContextProvider>


}

export default AppWrapper