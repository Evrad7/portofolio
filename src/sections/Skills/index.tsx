import skills from '@/data/skills'
import SkillItem from '@/components/SkillItem'
import Title from '@/components/Title'
import React from 'react'

const Skills = () => {
  return (
    <section className=' pt-5 sm:pt-8 lg:pt-12 xl:pt-21 pb-8 sm:pb-13 lg:pb-21 xl:pb-32'>
       <Title  text = "Ce que je peux faire" className='mb-4 sm:mb-13 xl:mb-21'/> 
       <div className=' px-3  grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-y-8- xl:gap-y-16- gap-x-32- mt-4 md:mt-6 xl:mt-8'>
          {skills.map((skill, index) => (
            <div className='pl-3 md:pl-14 pr-1 md:pr-16 py-6 md:py-8 relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px]  before:bg-black before:opacity-30 sm:before:opacity-50 md:before:opacity-70
                 after:absolute after:top-0 after:left-0 after:w-[1px] after:h-full after:bg-black after:opacity-30 sm:after:opacity-50 md:after:opacity-70
                 xl:nth-4:before:hidden  xl:nth-4:after:hidden xl:nth-3:after:block xl:nth-5:after:block    
                 md:nth-3:after:hidden md:nth-5:after:hidden md:nth-5:before:hidden md:nth-6:before:hidden
                 nth-6:before:hidden
                 md:nth-1:after:hidden
                 
                 max-md:even:after:left-full

            ' key ={index}>
                <SkillItem  data = {skill}/> 
            </div>
          ))}
       </div>
    </section>
  )
}

export default Skills