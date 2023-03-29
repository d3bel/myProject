import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./context/AuthContext";
// import { useTokenService } from "./hooks/useTokenService";
import { itemServiceFactory } from "./services/itemServiceFactory";

import { Header } from "./components/Header/Header";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./components/Logout/Logout";
import { AddItem } from "./components/Catalogue/AddItem";
import { Details } from "./components/Details/Details";

function App() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const service = itemServiceFactory(); //(auth.accessToken) Да се добави TOKEN;

  useEffect(() => {
    service.getAllItems().then((result) => {
      setItems(result);
    });
  }, []);

  const onAddItemSubmit = async (itemData) => {
    const newItem = await service.create(itemData);
    console.log(newItem);
    setItems((state) => [...state, newItem]);
    navigate("/catalogue");
  };

  const onDetailSubmit = (itemData) => {
    console.log(itemData);
  };

  return (
    <AuthProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalogue"
            element={
              <Catalogue items={items} onDetailSubmit={onDetailSubmit} />
            }
          />
          <Route path="/catalogue/:id/details" element={<Details />} />
          <Route
            path="/catalogue/add-item"
            element={<AddItem onAddItemSubmit={onAddItemSubmit} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
