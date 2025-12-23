import useAppContext from '@/hooks/useAppContext.hook'
import { useInView } from 'motion/react'
import React, { ReactNode, useEffect, useRef } from 'react'

const SectionWrapper = ({sectionId, children}: {sectionId: string, children: ReactNode}) => {
    const {setActiveSection} = useAppContext()
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, {margin: "-48px 0px -100% 0px"})

    useEffect(() =>{
        if(isInView){
            setActiveSection(sectionId)
        }
    }, [isInView, sectionId, setActiveSection])
  return (
    <section  id = {sectionId} ref = {ref}>
        {children}
    </section>
  )
}

export default SectionWrapper