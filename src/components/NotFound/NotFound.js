import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  console.log("not found");
  return (
    <div className={styles["container"]}>
      <h1>Content not found: 404</h1>
      <Link to="/">{`<<< Go to home page`}</Link>
    </div>
  );
};
