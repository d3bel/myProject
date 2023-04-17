import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          Designed by{" "}
          <Link className={styles["active"]} to="http://localhost:3000/">
            Ivaylo Stefanov
          </Link>
          <p>
            Copyright &copy; <Link className={styles["active"]} to="#">http://localhost:3000</Link>. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
