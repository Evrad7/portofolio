"use client"

import useDevice from '@/hooks/useDevice'
import UpdateFollowerWrapperWatchIntro from '@/components/UpdateFollowerWrapperWatchIntro'
import PlayIconMobile from '@/components/PlayIcon/PlayIconMobile'

const Hero = () => {

  const onStartVideo = () => {
    alert("starting vidéo .....")
  }
  const {isMobile} = useDevice()

 
  return (
    <UpdateFollowerWrapperWatchIntro>
      <div className="cursor-pointer relative">
        <div  className='bg-[url(/video.png)] bg-no-repeat bg-cover h-screen relative bg-gray-950'>
          {isMobile && <PlayIconMobile onClick = {onStartVideo}/>}
        </div>
     </div>
    </UpdateFollowerWrapperWatchIntro>
    
  
  )
}

export default Hero

