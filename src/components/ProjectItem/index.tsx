import { ProjectType } from '@/data/projects'
import useDevice from '@/hooks/useDevice'
import { div } from 'motion/react-client'
import Image from 'next/image'
import React, { memo, useCallback, useEffect, useRef } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import {motion, useAnimate} from "motion/react"
import { ProjectStateType } from '@/sections/Projects'


const animationOpenDelay = .05
const animationOpenDuration = .5

const animationType = "tween"

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

      await animate(scope.current, {height: "55vh"}, {duration: animationOpenDuration, type: animationType, delay: animationOpenDelay})
    }
    else if (state === "close"){
      await animate(scope.current, {height: 0}, {duration: animationCloseDuration, type: animationType, delay: animationCloseDelay})
     onCloseComplete()
    }
     
  },    [animate, onCloseComplete, scope, state])

  useEffect(()=>{
      handleAnimation()
  }, [handleAnimation])

  return (
    <div ref = {ref} className='scroll-mt-30'>
      <div className='h-[4.5rem] xl:h-[7rem] 2xl:h-[9rem] border-t p-2 flex items-center lg:mb-2 xl:mb-0 cursor-pointer' onClick={()=>toggleStateProject(id)}>
        <div className='flex gap-x-2 xl:gap-x-4 2xl:gap-x-6 border-stone-600 grow-1'>
          <div className=''>
          <span className='2xl:font-light font-mono text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl'>0{id+1}</span>
          </div>
          <h2 dangerouslySetInnerHTML = {{__html: data.title}} className='uppercase font-normal 2xl:font-normal sm:text-lg lg:text-xl xl:text-3xl 2xl:text-[2.55rem] sm:tracking-wide'/>
          <button className='ml-auto sm:mr-2 md:mr-6 lg:mr-8 xl:mr-10 2xl:mr-16 shrink-0 cursor-pointer'>
            <svg
            className='md:scale-[1.2] xl:scale-[2] '
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="var(--color-black)"
            >
              <rect x="11" y="4" width="2" height="16" />
              <rect x="4" y="11" width="16" height="2" />
            </svg>
          </button>
        </div>
      </div>
      <div ref = {scope} className='h-0 overflow-hidden'>
        <div className='grid grid-cols-1 xl:grid-cols-2 items-center min-h-[22rem] xl:gap-x-16 2xl:gap-x-24 gap-y-4 sm:gap-y-8'>
          <motion.div
            className='w-full order-1 xl:order-2'
            initial = {{y:0}}
            animate =  {{y: state === "open" ? 0: -50}}
            transition={{type: animationType, delay: state === "open" ? animationOpenDelay :animationCloseDelay, duration: state === "open" ? animationOpenDuration :animationCloseDuration}}
            viewport={{once: true}}
          
            >
            <Swiper 
              spaceBetween={2.1}
              slidesPerView={1.1}
              fadeEffect={{crossFade:true}}
              grabCursor
              breakpoints={{
                  640: {
                  slidesPerView:  2.1,
                  spaceBetween: 2,
                },
                1280: {
                  slidesPerView: 2.1,
                    spaceBetween: 20
                },
              
              }}
            >
              {data.photoPaths.map((item, index) =>(
              <SwiperSlide key ={index} >
                <div className='w-full max-w-[800px]  xl:max-w-[500px] first:pl-2 md:first:pl-6 xl:first:pl-0'>
                  {breakpoints.xl ? 
                  <Image className='max-w-full h-auto grayscale-75 border-[0.2px] border-gray-300 sm:border-gray-200' width = {818} height = {702} src = {item.vertical} alt = {data.title} />: 
                  <Image className='max-w-full h-auto grayscale-75 border-[0.2px] border-gray-300 sm:border-gray-200' width = {1455} height = {644} src = {item.horizontal} alt = {data.title} />
                }
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          
          <motion.div className='xl:pl-22 order-2 xl:order-1 px-2 md:px-4'
              animate ={{y: state === "open" ? 0 : -50, }}
              transition={{type:"tween", delay: state === "open" ? animationOpenDelay :animationCloseDelay, duration: state === "open" ? animationOpenDuration :animationCloseDuration}}
            >
            <div dangerouslySetInnerHTML={{__html:data.description}} className=' text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl font-tenor '/> 
          </motion.div>
       </div>
       <div className='text-end mr-20 mt-8 2xl:mt-12 xl:mr-60'>
        <a href={data.link} target='_blank' className='font-medium  md:text-lg xl:text-2xl flex justify-end gap-x-3 md:gap-x-4 xl:gap-x-6 items-center text-stone-800' >
          <span className='font-tenor'>Voir le projet</span>
        <svg
          className='xl:scale-150'
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
  
    </div>
  
  )
}

export default memo(ProjectItem)