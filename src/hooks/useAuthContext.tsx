import { createContext, useContext, useEffect, useState } from "react";
import { getAccessTokenLocalStorage } from "../utils/localStorage";
import { AuthContextType, AuthProviderProps } from "../type/auth";

const defaultValue: AuthContextType = {
  isLogined: false,
  setIsLogined: () => {},
};

export const AuthContext = createContext<AuthContextType>(defaultValue);

export const useAuthContext = (): AuthContextType => useContext(AuthContext);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogined, setIsLogined] = useState<boolean>(false);

  useEffect(() => {
    const token = getAccessTokenLocalStorage("accessToken");
    setIsLogined(!!token);
  }, [setIsLogined]);

  const authContextValue: AuthContextType = {
    isLogined,
    setIsLogined,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
