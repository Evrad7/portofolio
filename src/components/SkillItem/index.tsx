import { SkillType } from '@/data/skills'
import React from 'react'

const SkillItem = ({data}: {data: SkillType}) => {
  return (
    <div className=''>
        <h2 className='text-sm md:text-base 2xl:text-xl uppercase font-medium mb-0.5 xl:mb-1'>{data.title}</h2>
        <p className='text-sm sm:text-base text-stone-800 text-left'>{data.description}</p>
        <div className='mt-1 xl:mt-2'>
            <h3 className='text-[.85rem] uppercase text-gold font-bold'>{data.subSkills.title}</h3>
            <ul className='text-[.85rem] xl:text[.85rem] pl-4 text-stone-700'>
                {data.subSkills.items.map((item, index) => (
                    <li className='flex items-center gap-x-2' key = {index}>
                        <div className='w-4 h-0.5 bg-gray-950'></div>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SkillItem