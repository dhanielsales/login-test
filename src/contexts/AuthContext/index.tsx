import { createContext, useContext } from 'react';

import { SignInResponse } from '../../services/login';

interface AuthContextProps {
  state?: SignInResponse;
  setAuth?: (state: SignInResponse) => void;
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
