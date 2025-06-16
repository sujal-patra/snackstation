import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const initialAuth = {
  isAuthenticated: false,
  user: null
};

export default ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const logout = () => {
    setAuth(initialAuth);
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

