import React, { ReactNode } from 'react'
import UpdateFollowerWrapper from '../UpdateFollowerWrapper'
import useDevice from '@/hooks/useDevice'
import PlayIconDesktop from '../PlayIcon/PlayIconDesktop'
import { twMerge } from 'tailwind-merge'

const UpdateFollowerWrapperWatchIntro = ({children, ...props}: {children: ReactNode, className?: string}) => {
  const {isDesktop} = useDevice()
    const onStartVideo = () =>{
        alert("starting intro .......")
    }
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
        backgroundElement: <PlayIconDesktop /> }}
        {...props}
            >
        {children}
    </UpdateFollowerWrapper>
  )
}

export default UpdateFollowerWrapperWatchIntro