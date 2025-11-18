import UpdateFollowerWrapper from '@/components/UpdateFollowerWrapper'
import experiences from '@/data/experiences'
import React from 'react'

const Experiences = ({className}: {className?: string}) => {
  return (
    <div className={className}>
      <table className='table-fixed border-collapse w-full'>
        <tbody>
          {experiences.map((item, index) => (
            <tr className='border-[0.5px] border-stone-300 text-xs sm:text-base' key = {index}>
              <td className='py-5 sm:py-9 px-5 flex gap-x-2 lg:font-medium'>
                <span className='font-mono text-gold font-bold'>0{index+1}</span>
                <span>{item.title}</span>
               </td>
              <td className='py-5 sm:py-9 px-5 lg:font-medium'>{item.period}</td>
              <td className='py-5 sm:py-9 px-5 lg:font-medium'>{item.enterprise}</td>
            </tr>
          ))}
        </tbody>
     </table>
    </div>

  )
}

export default Experiences