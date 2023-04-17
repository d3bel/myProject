import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStorage } from "../hooks/useStorage";

import { AuthServiceFactory } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useStorage("accessT", {});
  const [errors, setErrors] = useState(null);

  const authService = AuthServiceFactory(auth.accessToken);

  useEffect(() => {
    if (errors) {
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    }
  });

  const onLoginSubmit = async (data) => {
    if (!data.email || !data.password) {
      return setErrors("All Fields are required!");
    }
    const result = await authService.login(data);
    if (result.message) {
      return setErrors(result.message);
    }
    setAuth(result);
    return navigate("/myProfile");
  };

  const onRegisterSubmit = async (data) => {
    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.password ||
      !data.confirmPassword ||
      !data.gender
    ) {
      return setErrors("All fields are required!");
    }
    if (!validEmail.test(data.email)) {
      return setErrors("Please enter a valid email address!");
    }
    if (data.password !== data.confirmPassword) {
      return setErrors("Passwords don't match!");
    }
    try {
      const { confirmPassword, ...regData } = data;

      if (confirmPassword !== regData.password) {
        console.error("Password does not match");
      }
      const result = await authService.register(regData);

      if (result.message) {
        return setErrors(result.message);
      }
      console.log(result.message);
      setAuth(result);
      return navigate("/myProfile");
    } catch (error) {
      console.log(error.message, ": Fail to submit");
    }
  };

  const onLogout = async () => {
    try {
      await authService.logout();
      localStorage.removeItem("accessT", auth.accessToken);
      setAuth({});
      navigate("/login");
    } catch (error) {
      console.log(error.message, ": Fail to logout");
    }
  };
  const getUserDetails = async () => {
    try {
      const result = await authService.me();
      const fullName = result.firstName + " " + result.lastName;
      return fullName;
    } catch (error) {
      console.log(error.message);
    }
  };

  const contextData = {
    getUserDetails,
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
    errors,
    firstName: auth?.firstName,
    lastName: auth?.lastName,
    userId: auth?._id,
    gender: auth?.gender,
    token: auth?.accessToken,
    email: auth?.email,
    isAuthenticated: !!auth?.accessToken,
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
