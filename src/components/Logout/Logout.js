import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

export const Logout = () => {
  const { onLogout } = useContext(AuthContext);
    onLogout();

};
