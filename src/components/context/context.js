import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  
  const userData = {
    name: "Jhon",
    age: 50,
  };

  const parentData = {
    name:"Jack",
    age:80
  }

  const combineData = {
    userData,
    parentData
  }

 
  return <AppContext.Provider value={combineData}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
