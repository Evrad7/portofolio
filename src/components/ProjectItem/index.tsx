import { ProjectType } from '@/data/projects'
import useDevice from '@/hooks/useDevice'
import Image from 'next/image'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {motion, useAnimate} from "motion/react"
import { ProjectStateType } from '@/sections/Projects'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'


const animationOpenDelay = 0.09
const animationOpenDuration = .4

const ease = "easeIn"

const animationCloseDelay = 0
const animationCloseDuration = .3

const ProjectItem = (
  {id, data, state, toggleStateProject, onCloseComplete}:
  {id: number,
    data: ProjectType,
    state:ProjectStateType
    toggleStateProject: (projectId: number) =>void,
    onCloseComplete: () => void,
  }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [scope, animate] = useAnimate()
  const {breakpoints} = useDevice()

  const handleAnimation = useCallback(async () =>{
    if (state === "open"){
      ref.current?.scrollIntoView({
          behavior: "smooth",
          block:"start",
      })
      // await new Promise(requestAnimationFrame)
      // await new Promise(requestAnimationFrame)

      await animate(scope.current, {maxHeight: 650}, {duration: animationOpenDuration, ease: ease, delay: animationOpenDelay})
    }
    else if (state === "close"){
      await animate(scope.current, {maxHeight: 0}, {duration: animationCloseDuration, ease: ease, delay: animationCloseDelay})
     onCloseComplete()
    }
     
  },    [animate, onCloseComplete, scope, state])

  const handleToggleStateProject = useCallback(() =>{
      toggleStateProject(id)
  }, [id, toggleStateProject])

  useEffect(()=>{
      handleAnimation()
  }, [handleAnimation])

  return (
    <motion.div ref = {ref} 
     
      className='scroll-mt-15 sm:scroll-mt-19 xl:scroll-mt-25 relative '>
      <UpdateFollowerWrapper mouseOptions={{visible: false ,text: `Ouvrir le projet `, radius: 30, textFontFamily: "var(--font-tenor)", textFontSize: ".6rem", }}>
        <div
          className='h-[4.5rem] xl:h-[7rem] 2xl:h-[9rem] border-t max-sm:border-stone-500 p-2 flex items-center lg:mb-2 xl:mb-0 cursor-pointer [--distance-top:-.15rem] sm:[--distance-top:-.5rem]' onClick={handleToggleStateProject}>
          <motion.div
            animate = {{top: state === "open" ? "var(--distance-top)":  0}}
            transition={{ease: ease, delay: state === "open" ? animationOpenDelay :animationCloseDelay, duration: state === "open" ? animationOpenDuration : animationCloseDuration}}
            className='flex gap-x-2 xl:gap-x-4 2xl:gap-x-6 border-stone-600 grow-1 relative'>
            <div className=''>
              <span className='2xl:font-light font-mono text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl'>0{id+1}</span>
            </div>
            <h2 dangerouslySetInnerHTML = {{__html: data.title}} className='uppercase font-normal 2xl:font-normal sm:text-lg lg:text-xl xl:text-3xl 2xl:text-[2.55rem] sm:tracking-wide'/>
            <button className='ml-auto sm:mr-2 md:mr-6 lg:mr-8 xl:mr-10 2xl:mr-16 shrink-0 cursor-pointer flex flex-col'>
            <svg
              className='md:scale-[1.2] xl:scale-[2] '
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="var(--color-black)"
              >
                <motion.rect animate = {{rotate: state === "open" ? "225deg": "0deg"}}
                  transition={{ease: ease, delay: state === "open" ? animationOpenDelay :animationCloseDelay, duration: state === "open" ? animationOpenDuration : animationCloseDuration}}
                  x="11" y="4" width="2" height="16" />
                <motion.rect  animate = {{rotate: state === "open" ? "225deg": "0deg"}}
                  transition={{ease: ease, delay: state === "open" ? animationOpenDelay :animationCloseDelay, duration: state === "open" ? animationOpenDuration : animationCloseDuration}}
                  x="4" y="11" width="16" height="2" />
              </svg>

            </button>
          </motion.div>
        </div>
    
        <div ref = {scope} className='max-h-0 overflow-hidden '>
          <div className='grid grid-cols-1 xl:grid-cols-2 items-center xl:gap-x-16 2xl:gap-x-24 gap-y-5 sm:gap-y-8 xl:py-7 [--distance-y:.5rem] xl:[--distance-y:2rem]'>
            <motion.div
              className='w-full order-1 xl:order-2'
              initial = {{y:0}}
              animate =  {{y: state === "open" ?  "var(--distance-y)": 0}}
              transition={{ease: ease, delay: state === "open" ? animationOpenDelay :animationCloseDelay, duration: state === "open" ? animationOpenDuration :animationCloseDuration}}
              viewport={{once: true}}
              >
                <Swiper 
                  spaceBetween={2.1}
                  slidesPerView={data.photoPaths.length === 1 ? 1.03:1.1}
                  fadeEffect={{crossFade:true}}
                  grabCursor
                  breakpoints={{
                      640: {
                      slidesPerView: data.photoPaths.length === 1 ? 1.1:2.1,
                      spaceBetween: 2,
                    },
                    1280: {
                      slidesPerView:data.photoPaths.length === 1 ? 1.1:2.1,
                        spaceBetween: 20
                    },
                  
                  }}
                >
                  {data.photoPaths.map((item, index) =>(
                  <SwiperSlide key ={index}  >
                    <div className={`w-full ${data.photoPaths.length === 1 ? "max-w-[700px]":" max-w-[800px] xl:max-w-[500px]" }  first:pl-2 md:first:pl-6 xl:first:pl-0 max-xl:mx-auto `}>
                      {breakpoints.xl ? 
                      <Image className='h-auto grayscale-75- border-[0.2px] border-gray-300 sm:border-gray-200' width = {818} height = {702} src = {item.vertical} alt = {data.title} />: 
                      <Image className='h-auto grayscale-75- border-[0.2px] border-gray-300 sm:border-gray-200' width = {1455} height = {644} src = {item.horizontal} alt = {data.title} />
                    }
                    </div>
                  </SwiperSlide>
                  ))}
                </Swiper>
            
            </motion.div>
            
            <motion.div className='xl:pl-22 order-2 xl:order-1 px-2 md:px-4'
                animate ={{y: state === "open" ?  "var(--distance-y)": 0, }}
                transition={{ease:ease, delay: state === "open" ? animationOpenDelay :animationCloseDelay, duration: state === "open" ? animationOpenDuration :animationCloseDuration}}
              >
              <div dangerouslySetInnerHTML={{__html:data.description}} className=' text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-tenor '/> 
            </motion.div>
        </div>
        <div className='flex justify-end mr-20 mt-8 2xl:mt-12 xl:mr-60 mb-15'>
            <a href={data.link} target='_blank' className='group font-medium  text-sm xl:text-lg flex justify-end gap-x-4 md:gap-x-6 xl:gap-x-8 items-center text-stone-800 relative py-3 pr-6 overflow-y-hidden overflow-x-visible' >
              <span className="font-tenor   overflow-hidden group-hover:-translate-y-11 group-active:-translate-y-11  transition-transform ease-in">Voir le projet</span>
              <span className='absolute bottom-0 left-0 w-full h-full text-gold translate-y-13 group-hover:translate-y-3 group-active:translate-y-3 transition-transform ease-in'>Voir le projet</span>
              <svg
                className='xl:scale-150 group-hover:-translate-x-4 group-active:-translate-x-4 transition ease-in group-hover:stroke-gold'
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                viewBox="0 0 24 24"
              >
                <path d="M3 12h18" />
                <path d="M15 7l6 5-6 5" />
              </svg>
          </a>
      
        </div>
      
        </div>
          </UpdateFollowerWrapper>
    </motion.div>
  
  )
}

export default memo(ProjectItem)