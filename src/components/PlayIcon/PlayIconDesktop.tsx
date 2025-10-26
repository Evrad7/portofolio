import React, { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const PlayIconDesktop: FC<HTMLAttributes<HTMLButtonElement>>= ({className, ...props}) => {
  return (
    <button className= {twMerge(className, 'scale-[.5] relative size-28  flex items-center justify-center')} {...props}>
        <div className='size-4 bg-white flex items-center justify-center rounded-full'>
            <svg className='scale-[.5]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="48" height="48" aria-label="Lecture">
                 <polygon points="36,32 36,64 68,48" fill="#000000"/>
            </svg>
        </div>
        <div className='absolute bottom-[38px] left-0 w-full text-center'>
            <span className='text-[3px]  font-bold tracking-wider text-gold inline uppercase'>Regarder l&apos;intro</span>
        </div>
    </button>
  )
}

export default PlayIconDesktop