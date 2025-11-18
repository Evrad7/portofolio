import formations from '@/data/formations'
import React from 'react'

const Formations = ({className}: {className?: string}) => {
  return (
    <div className={className}>
      <table className='table-fixed border-collapse w-full'>
        <tbody>
          {formations.map((item, index) => (
            <tr className='border-[0.5px] border-stone-300 text-xs sm:text-base' key = {index}>
              <td className='py-5 sm:py-9 px-1 sm:px-5 flex gap-x-2 lg:font-medium'>
                <span className='font-mono text-gold font-bold'>0{index+1}</span>
                <span>{item.degree}</span>
               </td>
              <td className='py-5 sm:py-9 px-1 sm:px-5 lg:font-medium'>{item.title}</td>
              <td className='py-5 sm:py-9 px-1 sm:px-5 lg:font-medium'>{item.school}</td>
            </tr>
          ))}
        </tbody>
     </table>
    </div>

  )
}

export default Formations