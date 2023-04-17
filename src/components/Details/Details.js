import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useItem } from "../../hooks/useItem";
import { useItemContext } from "../../context/ItemContext";
import { Comments } from "../Comments/Comments";
import { FormComments } from "../Comments/FormComments";

import styles from "./Details.module.css";

export const Details = () => {
  const [confirmation, setConfirmation] = useState(false);
  const { itemId } = useParams();
  const {
    item,
    isAuthenticated,
    isOwner,
    onEditComment,
    removeComment,
    onCreateComment,
  } = useItem(itemId);
  const { onRemoveItem } = useItemContext();

  const handleRemove = () => setConfirmation(true);

  const onRemoveItemHandler = () => {
    onRemoveItem(itemId);
    setConfirmation(false);
  };
  return (
    <div key={item._id} className={styles["details"]}>
      <div className={styles["container"]}>
        {/* <!-- Item Detail Start --> */}
        <h1>{item.format}</h1>
        <div className={styles["item"]}>
          <div className={styles["detailsInfo"]}>
            {item.format === "Stamp" ? (
              <img className={styles["stamp-img"]} src={item.imageUrl} alt="" />
            ) : (
              <img className={styles["coin-img"]} src={item.imageUrl} alt="" />
            )}
            
            <div className={styles["itemInfo"]}>
              <h2>Theme: {item.themes}</h2>
              <h3>Type: {item.format}</h3>
              <p>Country: {item.country}</p>
              <p>Themes: {item.themes}</p>
              <p>Series: {item.series}</p>
              <p>Value: {item.faceValue}</p>
              <p>Category: {item.format}</p>
              <p>Issued on: {item.issuedOn}</p>
              <i>Posted by: {item.postedBy}</i>
              <img src={item.gender} alt="" />
              {item.description && (
                <>
                  <p>More information:</p>
                  <small>{item.description}</small>
                </>
              )}
              {isOwner && (
              <div className={styles["itemButtons"]}>
                <Button
                  className={styles["edit"]}
                  as={Link}
                  to={`/catalogue/edit/${itemId}`}
                >
                  Edit
                </Button>
                <Button className={styles["remove"]} onClick={handleRemove}>
                  Remove
                </Button>
                {confirmation && (
                  <div className={styles["confirmation-p"]}>
                    <p>Are you sure you want to remove this item?</p>
                    <Button
                      className={styles["confirmation-yes"]}
                      onClick={onRemoveItemHandler}
                    >
                      Yes
                    </Button>
                    <Button
                      className={styles["confirmation-no"]}
                      onClick={() => setConfirmation(false)}
                    >
                      No
                    </Button>
                  </div>
                )}
              </div>
            )}
            </div>
            
          </div>
        </div>
      </div>
      <Comments
        item={item}
        onEditComment={onEditComment}
        removeComment={removeComment}
      />
      <FormComments
        isAuthenticated={isAuthenticated}
        onCreateComment={onCreateComment}
      />
    </div>
  );
};
