import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

import styles from "./MyProfile.module.css";

export const Collection = ({ items, collectionModal }) => {
  return (
    <>
      {items && items.length > 0 && (
        <ListGroup className={styles["modal"]}>
          {items.map((item) => (
            <ListGroup.Item
              key={item._id}
              className={styles["itemInfo"]}
              action
              as={Link}
              to={`/catalogue/${item._id}`}
            >
              {item.format}
              {item.format === "Stamp" ? (
                <img
                  className={styles["modalStamp"]}
                  src={item.imageUrl}
                  alt=""
                />
              ) : (
                <img
                  className={styles["modalCoin"]}
                  src={item.imageUrl}
                  alt=""
                />
              )}

              {item.series}
              <i>Click to view details!</i>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <button
        className={styles["myButton"]}
        type="button"
        onClick={collectionModal}
      >
        {"<< Back to Profile"}
      </button>
    </>
  );
};
