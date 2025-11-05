import Tilt from "react-parallax-tilt"
import { MenuItemType } from "./menuItems"

const MenuItem = ({data}:{data:MenuItemType}) =>{
    return (
            <a href={`#${data.href}`} className=''>
            <Tilt tiltReverse glareEnable glareReverse>
                <div 
                    className='relative bg-white flex items-center [@media(min-height:640px)]:block px-2 pt-2 pb-2 [@media(min-height:640px)]:pb-3  min-h-14  [@media(min-height:640px)]:min-h-27 overflow-hidden
                    before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[url(/small-shadow-exp.png)]  before:bg-cover before:bg-no-repeat before:bg-right  before:opacity-35 sm:before:opacity-0 sm:hover:before:opacity-75 before:transition-opacity before:duration-300 before:ease-in-out'>
                        <h1 className='font-bold  mb-0 uppercase text-gold'>{data.title}</h1>
                        <p className='leading-5 hidden  flex-col  [@media(min-height:640px)]:flex pl-3 pt-0 font-normal text-sm'  >
                            {data.subItems.map((subItem, index) => 
                                <span key = {`${index}`}>{subItem}</span>
                            )}
                        </p>
                </div>
            </Tilt>
        </a>
   
    
    )
}


export default MenuItem
  