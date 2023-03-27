import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const authService = AuthServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      return navigate("/");
    } catch (err) {
      console.error("there is an error");
    }
  };

  const onRegisterSubmit = async (data) => {
    const { confirmPassword, ...regData } = data;

    if (confirmPassword !== regData.password) {
      return new Error("Password does not match");
    }

    try {
      const result = await authService.register(regData);
      setAuth(result);
      return navigate("/");
    } catch (err) {
      console.error("there is an error");
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
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
