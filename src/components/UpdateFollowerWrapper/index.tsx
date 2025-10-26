"use client"

import useDevice from '@/hooks/useDevice';
import { CSSProperties, ReactNode, useRef } from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import { MouseSettings } from 'react-mouse-follower/dist/types';
import { twMerge } from 'tailwind-merge';

const UpdateFollowerWrapper = ({children, mouseOptions, ...props}:
      {mouseOptions?: MouseSettings;
      style?: CSSProperties;
      className?: string;
      onMouseEnter?: () => void;
      onMouseLeave?: () => void;
      onClick?: () => void;
      children?: ReactNode | ((mouseFollowerIsActive: boolean) => ReactNode);
    }) => {
  const {isMobile} = useDevice()
  const mouseFollowerIsActive: boolean = !isMobile
  const ChildrenNode = typeof children === "function" ? children(mouseFollowerIsActive) : children

    
  if (mouseFollowerIsActive){
    return (
        <UpdateFollower mouseOptions={mouseOptions} {...props}>
          {ChildrenNode}
        </UpdateFollower>
    )
  }
   return (
      <div {...props}>{ChildrenNode}</div>
    )
}

export default UpdateFollowerWrapper