import { createContext, useContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toogleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <SidebarContext.Provider value={{ isCollapsed, toogleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// custom hook: kendi hookumuzu yazma
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  return context;
};
