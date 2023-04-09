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
import { AddItem } from "./components/Catalogue/AddItem";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Details/Edit";
import { RoutingGuard } from "./components/common/RoutingGuard";
import { OwnerGuard } from "./components/common/OwnerGuard";
import { MyProfile } from "./components/MyProfile/MyProfile";
import { WRONG_PAGE } from "./components/WRONG_PAGE/WRONG_PAGE";

function App() {
  return (
    <div>
      <AuthProvider>
        <ItemProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/:itemId" element={<Details />} />
            <Route element={<RoutingGuard />}>
              <Route path="/catalogue/add-item" element={<AddItem />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route
                path="/catalogue/edit/:itemId"
                element={
                  <OwnerGuard>
                    <Edit />
                  </OwnerGuard>
                }
              />
              <Route path="/*" element={<WRONG_PAGE />} />
            </Route>
          </Routes>
          <Footer />
        </ItemProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
