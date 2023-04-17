import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import styles from "./Header.module.css";

export const Header = () => {
  const { isAuthenticated, firstName, lastName } = useContext(AuthContext);

  return (
    <header>
      <div className={styles["header"]}>
        <div className={styles["navigation"]}>
          <h1 className={styles["h1"]}>
            <Link to="/">Home</Link>
          </h1>
          {!isAuthenticated && (
            <ul>
              <li className={styles.buttonCatalogue}>
                <Link to="/catalogue">Catalogue</Link>
              </li>
              <li className={styles.buttonLogin}>
                <Link to="/login">Login</Link>
              </li>
              <li className={styles.buttonRegister}>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
          {isAuthenticated && (
            <ul>
              <li className={styles.buttonCatalogue}>
                <Link to="/catalogue">catalogue</Link>
              </li>
              <li className={styles.buttonProfile}>
                <Link to="/myProfile">
                  Profile ({firstName} {lastName})
                </Link>
              </li>
              <li className={styles.buttonLogout}>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};
