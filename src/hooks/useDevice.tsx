import { useState, useEffect } from 'react';
import { isMobile as isMobileHelper } from '@/app/_utils/device';
import defaultTheme from "tailwindcss/defaultTheme"

type BreakpointsType = {
    // sm: boolean,
    // md: boolean,
    // lg: boolean,
    xl?: boolean,
    // '2xl': boolean,
}

type UseDeviceType = {
    width?: number, height?: number, isMobile?: boolean, isDesktop?: boolean, breakpoints: BreakpointsType
}
const useDevice : () => UseDeviceType = () => {

      const getWindowDimensions : () => {width?: number, height?: number}= ()=>{
          const { innerWidth: width, innerHeight: height } = window;
          return {
            width:width,
            height:height,
          };
       
      
      }

  const [settings, setSettings] = useState<UseDeviceType>({breakpoints:{}});

  useEffect(() => {
    function handleResize() {
        const isMobile = isMobileHelper()
        const {width, height} = getWindowDimensions()
        const xl = window.matchMedia(`(min-width: ${defaultTheme.screens.xl})`).matches
      setSettings({width, height, isMobile, isDesktop: !isMobile, breakpoints: {xl}});
    }
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {...settings};
}

export default useDevice