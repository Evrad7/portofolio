"use client"

import useDevice from '@/hooks/useDevice'
import UpdateFollowerWrapperWatchIntro from '@/components/UpdateFollowerWrapperWatchIntro'
import PlayIconMobile from '@/components/PlayIcon/PlayIconMobile'

const Hero = () => {
  const {isMobile} = useDevice()
  
  return (
    <UpdateFollowerWrapperWatchIntro>
      {({onStartVideo}) => (
        <div>
          <div className="cursor-pointer h-screen w-full overflow-hidden relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/50 before:via-black/50 before:to-black/90 before:opacity">
            <video 
              src = "/hero.mp4" 
              className='bg-no-repeat object-cover size-full bg-gray-950'
              poster='/poster_hero.webp'
              playsInline
              muted
              autoPlay
               loop/>
            {isMobile && <PlayIconMobile onClick = {onStartVideo}/>}
       </div>
        </div> 
       
      )
      }
      

    </UpdateFollowerWrapperWatchIntro>
    
  
  )
}

export default Hero

