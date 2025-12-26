

"use client"

import React, { createContext,  useState } from "react";

export type AppContextType = {
  activeSection: string | null;
  setActiveSection: (activeSection: string | null) => void
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  return (
    <AppContext.Provider value={{activeSection, setActiveSection}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };