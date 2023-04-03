import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStorage } from "../hooks/useStorage";

import { AuthServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  // const [names, setNames] = useState({ firstName: "", lastName: "" });
  const [auth, setAuth] = useStorage("accT", {});
  const authService = AuthServiceFactory(auth.accessToken);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);
      setAuth(result);
      return navigate("/");
    } catch (error) {
      console.log(error.message, ": Failed to login");
    }
  };

  const onRegisterSubmit = async (data) => {
    try {
      const { confirmPassword, ...regData } = data;

      if (confirmPassword !== regData.password) {
        return new Error("Password does not match");
      }

      const result = await authService.register(regData);
      setAuth(result);
      return navigate("/");
    } catch (error) {
      console.log(error.message, ": Fail to submit");
    }
  };

  const onLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem("accT", auth.accessToken);
      setAuth({});
      navigate("/login")
    } catch (error) {
      console.log(error.message, ": Fail to logout");
    }
  };

  const getUserDetails = async () => {
    try {
      const result = await authService.me();
      const firstName = result["first-name"];
      const lastName = result["last-name"];
      // console.log(firstName, lastName);
      return { firstName, lastName };
      // setNames({ firstName, lastName });
      // console.log(names);
    } catch (error) {
      console.log(error.message);
    }
  };

  const contextData = {
    getUserDetails,
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
    // names,
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
