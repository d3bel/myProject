import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Items } from "./Items";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";

import styles from "./Catalogue.module.css";

export const Catalogue = () => {
  const { isAuthenticated } = useAuthContext();
  const { items } = useItemContext();
  return (
    <div className={styles.catalogue}>
      <div className={styles.container}>
        <h2>Latest valuables added to our Catalogue</h2>

        {items.length > 0 ? (
          <div className={styles.itemList}>
            <Items items={items} />
          </div>
        ) : (
          <div className={styles.noItem}>
            <h3>Our catalogue Is Empty!</h3>
          </div>
        )}
        {isAuthenticated && (
          <p>
            Add Items...
            <Button className={styles["catalogue-p-button"]} as={Link} to="/catalogue/add-item">
              Add Items
            </Button>
          </p>
        )}
      </div>
    </div>
    // <div
    //   className="container-fluid bg-dark text-light py-5"
    //   style={{ marginBottom: "0px" }}
    // >
    //   <div className="container bg-dark py-5">
    //     {!items || items?.length === 0 ? (
    //       <div
    //         className="text-center mx-auto mb-5 text-white"
    //         style={{ maxWidth: "500px" }}
    //       >
    //         <h1 className="display-3">No content</h1>
    //         <hr
    //           className="w-25 mx-auto text-secondary"
    //           style={{ opacity: "1" }}
    //         />
    //       </div>
    //     ) : (
    //       <Items items={items} />
    //     )}
    //     {isAuthenticated && (
    //       <div className="col-12 text-center">
    //         <Button
    //           variant="outline-warning"
    //           as={Link}
    //           to="/catalogue/add-item"
    //           className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
    //         >
    //           Add Item
    //         </Button>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};
