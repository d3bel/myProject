import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useStorage } from "../hooks/useStorage";

import { AuthServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useStorage("accT", {});
  const authService = AuthServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    const result = await authService.login(data);
    setAuth(result);
    return navigate("/");
  };

  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...regData } = data;

    if (confirmPassword !== regData.password) {
      return new Error("Password does not match");
    }

    const result = await authService.register(regData);
    setAuth(result);
    return navigate("/");
  };

  const onLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem(auth.accessToken);
      setAuth({});

    } catch (error) {
      console.log(error);
    }
  };

  const contextData = {
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
