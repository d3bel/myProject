import { Link } from "react-router-dom";

import styles from "./Catalogue.module.css";

export const Items = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item._id} className={styles.item}>
          <Link to={`/catalogue/${item._id}`} item={item}>
            {item.format === "Stamp" ? (
              <img className={styles["stamp-img"]} src={item.imageUrl} alt="" />
            ) : (
              <img className={styles["coin-img"]} src={item.imageUrl} alt="" />
            )}
            <button
              className={styles["detailsButton"]}
              as={Link}
              to={`/catalogue/${item._id}`}
            >
              Details
            </button>
          </Link>
          <div className={styles.itemInfo}>
            <h2>Type: {item.format}</h2>
            <h3>Theme: {item.themes}</h3>
            <p>Country: {item?.country}</p>
            <p>Themes: {item?.themes}</p>
            <p>Series: {item?.series}</p>
            <p>Value: {item?.faceValue}</p>
            <p>Category: {item?.format}</p>
            <p>Issued on: {item?.issuedOn}</p>
            <i>Posted by: {item.postedBy}</i>
            <img src={item.gender} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};
