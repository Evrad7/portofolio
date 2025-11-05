"use client"

import { useInView } from "motion/react"
import MenuContentHero from "./MenuContentHero"
import { useEffect, useRef } from "react"
import MenuContentBody from "./MenuContentBody"



const MenuContent = () => {

const ref = useRef<HTMLDivElement>(null)
const isInView = useInView(ref, {initial: true})

useEffect(() => {
  console.log("Element is in view: ", isInView)
}, [isInView])

return (
    <div ref = {ref} className={`fixed right-0 z-20 w-full h-full xl:w-auto xl:absolute  xl:right-25 xl:block`}>
     {isInView ? <MenuContentHero/>: <MenuContentBody/> }
    </div>
)
 
}

export default MenuContent