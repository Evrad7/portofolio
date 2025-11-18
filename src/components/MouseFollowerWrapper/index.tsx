"use client"

import useDevice from "@/hooks/useDevice"
import { Fragment, useEffect, useRef } from "react"
import { MouseFollower, useControlOptions } from "react-mouse-follower"


const MouseFollowerWrapper = ({children}: {children: React.ReactNode}) => {
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
         <Fragment>
            <MouseFollower  />
               <div ref = {refOverlay} className="h-dvh w-full fixed top-0 left-0 z-50"></div>
             {children}
         </Fragment> 
      )
   }
   return children


}

export default MouseFollowerWrapper