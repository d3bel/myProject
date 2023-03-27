import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { AuthContext } from "./context/AuthContext";
// import { useTokenService } from "./hooks/useTokenService";
import { AuthServiceFactory } from "./services/authService";
import { itemServiceFactory } from "./services/itemServiceFactory";

import { Header } from "./components/Header/Header";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Header/Home";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./components/Logout/Logout";
import { AddItem } from "./components/Catalogue/AddItem";

function App() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [auth, setAuth] = useState({});
  const Service = itemServiceFactory(auth.accessToken);
  const authService = AuthServiceFactory(auth.accessToken);

  useEffect(() => {
    Service.getAllItems().then((item) => setItems(item));
  }, []);

  const onAddItemSubmit = async (itemData) => {
    const newItem = await Service.create(itemData, auth.accessToken);
    console.log(newItem);
    setItems((state) => [...state, newItem]);
    navigate("/catalogue");
  };

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
    onAddItemSubmit,
    onRegisterSubmit,
    onLoginSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={{ ...contextData }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue items={items} />} />
          <Route path="/catalogue/add-item" element={<AddItem />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
