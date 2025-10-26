import React, { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'



const PlayIconMobile: FC<HTMLAttributes<HTMLButtonElement>>= ({className, ...props}) => {
  return (
    <button className= {twMerge(className, "absolute top-1/2 left-1/2 -translate-1/2   flex items-center justify-center")} {...props}>
      <div className= "size-12 bg-white flex items-center justify-center rounded-full">
          <svg className='scale-[.5]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="48" height="48" aria-label="Lecture">
                <polygon points="36,32 36,64 68,48" fill="#000000"/>
          </svg>
      </div>
      <div className='absolute -bottom-6  w-40 text-center'>
          <span className= "text-xs md:text-sm font-bold tracking-wider text-gold inline uppercase">Regarder l&apos;intro</span>
      </div>
  </button>
  )
 
}

export default PlayIconMobile