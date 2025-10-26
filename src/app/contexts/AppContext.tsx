

"use client"

import React, { createContext, useEffect, useRef } from "react";
import { MouseFollower } from "react-mouse-follower";

export type AppContextType = {
  mouseFollowerRef: React.RefObject<HTMLElement | null>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const mouseFollowerRef = useRef<HTMLElement>(null);

    useEffect(() =>{
        mouseFollowerRef.current = document.getElementById("mouse-follower")
    },  [])
  return (
    <AppContext.Provider value={{mouseFollowerRef}}>
        <MouseFollower />
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };