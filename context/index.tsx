import { createContext, ReactNode } from "react";

export interface IContextGlobal {}

export const GlobalContext = createContext<IContextGlobal | null>(null);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const value = {};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

/*
	const { IContextGlobal, GlobalContext } = useContext(GlobalContext) as IContextGlobal;
*/
