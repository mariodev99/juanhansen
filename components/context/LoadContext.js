import { createContext, useState, useContext } from "react";

const LoadContext = createContext();

export const LoadProvider = ({ children }) => {
  const [isLoadFinish, setLoadFinish] = useState(false);

  return (
    <LoadContext.Provider value={{ isLoadFinish, setLoadFinish }}>
      {children}
    </LoadContext.Provider>
  );
};

export const useLoad = () => useContext(LoadContext);
