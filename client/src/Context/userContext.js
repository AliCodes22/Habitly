import { useState, createContext } from "react";

const initialState = {
  showSidebar: false,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    userId: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("clicked");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
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
