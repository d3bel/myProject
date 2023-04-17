// import { useAuthContext } from "../../context/AuthContext";
import styles from "./Errors.module.css";
export const Errors = ({ errors }) => {
  return (
    <div className={styles["error"]}>
      <p>{errors}</p>
    </div>
  );
};
