import React, {ReactNode, useEffect, useRef, useState } from 'react'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'
import useDevice from '@/hooks/useDevice'
import PlayIconDesktop from '../PlayIcon/PlayIconDesktop'
import {AnimatePresence, motion} from "motion/react"

type RenderProps = { isVideoOpen: boolean, onStartVideo: () => void, onCloseVideo: () => void };
const UpdateFollowerWrapperWatchIntro = ({children, ...props}: {children: ReactNode | ((args: RenderProps) => ReactNode), className?: string}) => {
  const {isDesktop} = useDevice()
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

    const onStartVideo = () =>{
        setIsVideoOpen(true)
    }
   const  onCloseVideo = () =>{
        setIsVideoOpen(false)
    }
  const onCloseButtonHandler = (event:React.MouseEvent<HTMLButtonElement>) =>{
      event.stopPropagation()
      onCloseVideo()
  }

  const renderChildren = () =>{
    if(typeof(children) === "function"){
      return children({isVideoOpen, onStartVideo, onCloseVideo})
    }
    return children
  }

  const handleVideoKeyUp = (e: React.KeyboardEvent) => {
  if (e.key === "Escape") {
    setIsVideoOpen(false)
  }
};
  useEffect(() =>{
    if(isVideoOpen){
      videoRef.current?.focus()
    }
  }, [isVideoOpen])
  return (
    <UpdateFollowerWrapper
        onClick={isDesktop ? onStartVideo: undefined}
        mouseOptions={{
        scale:  10,
        radius: 16,
        // radius: 80,
        backgroundColor: "transparent",
        // zIndex: 99,
        followSpeed: .5,
        visible:true,
        backgroundElement: <PlayIconDesktop /> }}
        {...props}
            >
        <AnimatePresence>
          {isVideoOpen && 
            <UpdateFollowerWrapper mouseOptions={{scale:0, visible:false}}>
              <motion.div 
              initial = {{top:"-100%", opacity: 0}}
              animate = {{top: 0, opacity: 1}}
              transition={{ease: "easeInOut", duration: .5}}
              exit={{top:"-100%"}}
              className='fixed right-0 h-full left-0 z-50 bg-black flex justify-center items-center'>
                <div className='md:relative 2xl:h-full aspect-video bg-red-500'>
                    <video ref = {videoRef} src="/hero.mp4" 
                      onKeyUp={handleVideoKeyUp}
                      className='object-contain size-full bg-gray-950 focus:outline-none focus-visible:outline-gold'
                      controls 
                      autoPlay 
                      loop 
                      playsInline
                      poster='/poster_hero.webp'
                      />
                      <button aria-label='close-video'
                        onClick={onCloseButtonHandler}
                        className='cursor-pointer absolute  max-md:bottom-1/6 right-1/2 md:top-5 md:right-5 max-md:translate-1/2 bg-gray rounded-full p-5 shadow-2xl group'
                        >
                        <div className="relative size-8">
                            <motion.div
                              className="absolute top-1/2 left-0 w-full h-[2px] bg-black
                                          before:absolute before:-top-1 before:-bottom-1 before:-left-4 before:w-4 before:bg-gray group-hover:before:left-full group-active:before:left-full before:transition-[left] before:duration-300"
                              style={{ transformOrigin: "50% 50%" }}
                              animate={{ rotate: 45, y: "-50%" }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            />

                            <motion.div
                              className="absolute top-1/2 left-0 w-full h-[2px] bg-black
                                          before:absolute before:-top-1 before:-bottom-1 before:-right-4 before:w-4 before:bg-gray group-hover:before:right-full group-active:before:right-full before:transition-[right] before:duration-300 before:delay-150"
                              style={{ transformOrigin: "50% 50%" }}
                              animate={{ rotate: -45, y: "-50%" }}
                              transition={{ duration: 0.25, ease: "easeInOut" }}
                            />
                      </div>
                        </button>
                </div>
              </motion.div>
            </UpdateFollowerWrapper>
          
          } 
        </AnimatePresence>
       
        {renderChildren()}
    </UpdateFollowerWrapper>
  )
}

export default UpdateFollowerWrapperWatchIntro