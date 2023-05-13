import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.footer}>
          Designed by{" "}
          <Link className={styles["active"]} to="https://istefanov-portfolio.netlify.app/">
            Ivaylo Stefanov
          </Link>
          <p>
            Copyright &copy; <Link className={styles["active"]} to="#">https://istefanov-portfolio.netlify.app/</Link>. All
            Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
