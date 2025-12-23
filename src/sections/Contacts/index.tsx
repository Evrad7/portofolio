"use client"

import Title from '@/components/Title'
import UpdateFollowerWrapper from '@/components/UpdateFollowerWrapper'
import contacts from '@/data/contacts'
import useDevice from '@/hooks/useDevice'
import React, { Fragment, useState } from 'react'
import ContactForm from './ContactForm'
import SectionWrapper from '@/components/SectionWrapper'



const Contacts = () => {
    const {breakpoints} = useDevice()

  return (
    <SectionWrapper sectionId='contact'>
        <div className='pb-20 lg:pb-40 bg-gray'>
            <Title color='gray' text ="Entrons en contact" className='mb-5 sm:mb-8'/>
            <div className='grid grid-cols-1 xl:grid-cols-2 px-2 md:px-8 gap-y-8  gap-x-20 items-center'>
                <div>
                    <div className='flex xl:grid xl:grid-cols-2  gap-x-0 sm:gap-x-8 xl:gap-x-10 xl:gap-y-10 justify-evenly sm:justify-center'>
                        {contacts.map((item, index) => (
                        <Fragment key = {index}>
                                <a  href={item.link} target = "_blank"  className='flex flex-col gap-y-0  text-xs sm:text-sm xl:text-base first:border-r first:border-b border-transparent xl:border-stone-300/50  p-2 odd:items-end odd:pr-4 even:pl-4
                                    nth-2:border-l nth-2:border-b nth-3:border-r nth-3:border-t  last:border-l last:border-t 
                                    '>
                                    <span className='space-x-1'>
                                        <span className='font-medium text-gold font-mono'>0{index+1}</span>
                                        <span>{item.network}</span>
                                    </span>
                                    <span className='italic'>{item.handle}</span>
                                </a>
                        
                            {(index < contacts.length - 1) && (!breakpoints.xl)  && 
                            <div className='xl:hidden'>
                                <hr className='h-full w-[1.5] bg-stone-400'/>
                            </div>
                            }
                        </Fragment>
                    
                        
                        ))}
                    </div>
                </div>
                <UpdateFollowerWrapper mouseOptions={{visible:false}}>
                    <div className='bg-[#d9d9d9] px-4 lg:px-8 pt-8 lg:pt-12 pb-21 w-full  max-w-4xl mx-auto'>
                        <ContactForm/>
                    </div>
                </UpdateFollowerWrapper>
            </div>
        </div>
    </SectionWrapper>
  
  )
}

export default Contacts