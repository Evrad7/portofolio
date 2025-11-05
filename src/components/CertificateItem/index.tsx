import { CertificateType } from '@/data/certificates'
import Image from 'next/image'
import React from 'react'

const CertificateItem = ({data}: {data: CertificateType}) => {
  return (
    <div className='bg-white p-4 lg:p-5 relative min-h-[220px] lg:min-h-[250px]'>
        <div className='flex gap-x-4 items-center'>
            <div>
             <Image className='max-w-[30px] sm:max-w-[40px]' width = {40} height={40} src={data.iconPath} alt={data.platform} />
            </div>
            <h1 className='text-sm sm:text-lg lg:text-xl text-gold font-bold'>{data.title}</h1>
        </div>
        <div className='mt-3 lg:mt-5'>
            <h4 className='text-sm lg:text-lg lg:mb-1'>Compétences validées</h4>
            <ul className='text-stone-700 text-sm lg:text-md'>
                {data.skills.map((item, index) => (
                    <li className = 'flex items-center gap-x-2 ' key = {index}>
                        <div className='w-2 h-0.5 bg-gray-950'></div>
                        <span className='h-5'>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div className='absolute bottom-2 lg:bottom-4 left-4 text-sm md:text-md italic underline'>
            <a href={data.link} target='_blank'>Voir le certificat</a>
        </div>
    </div>
  )
}

export default CertificateItem