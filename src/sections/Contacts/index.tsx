import Title from '@/components/Title'
import contacts from '@/data/contacts'
import React, { Fragment } from 'react'

const Contacts = () => {
  return (
    <div className='pb-40 bg-gray'>
        <Title color='gray' text ="Entrons en contact" className='mb-5 sm:mb-8'/>
        <div className='grid grid-cols-1 lg:grid-cols-2 px-2 gap-y-8'>
            <div>
                <div className='flex gap-x-2  sm:gap-x-8 justify-between sm:justify-center'>
                    {contacts.map((item, index) => (
                    <Fragment key = {index}>
                        <a  href={item.link}  className='flex flex-col gap-y-0  text-xs sm:text-sm '>
                            <span className='space-x-1'>
                                <span className='font-medium text-gold font-mono'>0{index+1}</span>
                                <span>{item.network}</span>
                            </span>
                            <span>{item.handle}</span>
                        </a>
                        {index < contacts.length - 1  && <hr className='h-full w-[1.5] bg-stone-400'/>}
                    </Fragment>
                
                    
                    ))}
                </div>
            </div>
        
            <div className='bg-[#d9d9d9] px-4 py-8 pb-21'>
                <form action="" className='space-y-8'>
                    <div>
                        <label htmlFor="name" className='text-sm block mb-2'>Name [<span className='text-gold'>Obligatoire</span>]</label>
                        <input id = "name" type="text" name ="name"  className='border-b border-stone-400 w-full py-[0.5px] px-2  focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200'/>
                    </div>
                    <div>
                        <label htmlFor="email" className='text-sm block mb-2'>Email [<span className='text-gold'>Obligatoire</span>]</label>
                        <input id = "email" type="email" name ="email"  className='border-b border-stone-400 w-full py-[0.5px] px-2  focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200'/>
                    </div>
                    <div>
                        <label htmlFor="enterprise" className='text-sm block mb-2'>Nom de l'entreprise</label>
                        <input  id = "enterprise" type="text" name ="enterprise"  className='border-b border-stone-400 w-full py-[0.5px] px-2  focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200'/>
                    </div>
                    <div>
                        <label htmlFor="object" className='text-sm block mb-2'>Objet [<span className='text-gold'>Obligatoire</span>]</label>
                        <input id = "object" type="text" name ="object"  className='border-b border-stone-400 w-full py-[0.5px] px-2  focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200'/>
                    </div>
                    <div>
                        <label htmlFor="message" className='text-sm block mb-2'>Message [<span className='text-gold'>Obligatoire</span>]</label>
                        <textarea id = "message"  name ="message"  className='border-b border-stone-400 w-full py-[0.5px] px-2  focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200 h-30'>

                        </textarea>
                    </div>
                    <div>
                        <button className='py-3 px-8 text-black bg-gold shadow' type='submit'>Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacts