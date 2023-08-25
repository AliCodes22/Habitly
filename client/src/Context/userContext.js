import { useState, createContext } from "react";

const token = localStorage.getItem("token");

const initialState = {
  showSidebar: false,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("clicked");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        showSidebar,
        setShowSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
