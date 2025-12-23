"use client"

import React from 'react'
import Experiences from './Experiences'
import Title from '@/components/Title'
import Formations from './Formations'
import SectionWrapper from '@/components/SectionWrapper'

const ExperiencesAndFormations = () => {
  return (
    <SectionWrapper sectionId='experience-and-education'>
      <div className='py-8 sm:py-13 xl:py-23 bg-gray'>
        <Title color='gray' text='Expérience & Formations' className='mb-5 sm:mb-8 xl:mb-13'/>
        <Experiences />
        <div className='h-16 sm:h-23 bg-white'></div>
        <Formations />
      </div>
    </SectionWrapper>

  )
}

export default ExperiencesAndFormations