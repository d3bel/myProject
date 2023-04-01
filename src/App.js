import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./context/AuthContext";
import { ItemProvider } from "./context/ItemContext";

import { Header } from "./components/Header/Header";
import { Catalogue } from "./components/Catalogue/Catalogue";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Home } from "./components/Home/Home";
import { Footer } from "./components/Footer/Footer";
import { Logout } from "./components/Logout/Logout";
import { AddItem } from "./components/Catalogue/AddItem";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Details/Edit";

function App() {
  return (
    <AuthProvider>
      <ItemProvider>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/:itemId" element={<Details />} />
            <Route path="/catalogue/edit/:itemId" element={<Edit />} />
            <Route path="/catalogue/add-item" element={<AddItem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
          <Footer />
        </div>
      </ItemProvider>
    </AuthProvider>
  );
}

export default App;
