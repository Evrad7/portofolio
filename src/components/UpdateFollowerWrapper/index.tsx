"use client"

import useDevice from '@/hooks/useDevice';
import { CSSProperties, ReactNode } from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import { MouseSettings } from 'react-mouse-follower/dist/types';

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
        <UpdateFollower mouseOptions={{visible: true, ...mouseOptions}} {...props}>
          {ChildrenNode}
        </UpdateFollower>
    )
  }
   return (
      <div {...props}>{ChildrenNode}</div>
    )
}

export default UpdateFollowerWrapper