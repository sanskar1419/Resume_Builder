import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const useAuthContextValue = () => {
  const value = useContext(authContext);
  return value;
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <authContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </authContext.Provider>
  );
};
