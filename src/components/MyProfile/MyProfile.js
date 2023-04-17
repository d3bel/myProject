import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";
import { Collection } from "./Collection";
import { useState } from "react";

import styles from "./MyProfile.module.css";

export const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { gender, firstName, lastName, email, userId } = useAuthContext();
  const { items } = useItemContext();

  const myCollection = items.filter((item) => item._ownerId === userId);
  const myLikes = "";
  const collectionModal = () => setShowModal(!showModal);

  return (
    <>
      <div className={styles["profile"]}>
        <h1>Welcome!</h1>
        <h4>This is your private space</h4>
        {!showModal && myCollection.length > 0 && (
          <div className={styles["myButtons"]}>
            <Link onClick={collectionModal} className={styles["myCollection"]}>
              My Collection
            </Link>

            {myLikes && (
              <Link className={styles["myLikes"]} to="/">
                My Favorites
              </Link>
            )}

            <div className={styles["noContent"]}>
              {!myLikes && <p>No Favorites yet!</p>}
            </div>
          </div>
        )}
        {showModal && (
          <Collection items={myCollection} collectionModal={collectionModal} />
        )}
        {myCollection?.length === 0 && (
          <div className={styles["myButtons"]}>
            <Link to="/catalogue/add-item" className={styles["myCollection"]}>
              Add items to My Collection
            </Link>
          </div>
        )}
      </div>
      <div className="container">
        <div className={styles["container"]}>
          <div>
            <img src={gender} alt="Profile-Img" />
            <h2>
              {firstName} {lastName}
            </h2>
            <p>Hobbies: Coins and Post Stamps enthusiast</p>
            <ul>
              <li>
                <i>{email}</i>
              </li>
              <li>
                <span>Sofia, Bulgaria</span>
              </li>
              <li>
                <Link
                  to={`"https://www.linkedin.com/in/${firstName}-${lastName}"`}
                >
                  {firstName} {lastName}
                </Link>
              </li>
            </ul>
          </div>
          <h3>About Me: </h3>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            pellentesque ex enim, eu vehicula magna tincidunt ac. Proin iaculis
            velit nec mi ultrices tincidunt. Donec sodales mauris id tincidunt
            vestibulum. Nunc bibendum arcu sit amet orci feugiat tincidunt. Duis
            faucibus risus euismod pretium lacinia. Vivamus dictum nisl libero,
            a ullamcorper lacus tempor eget.
          </i>
        </div>
      </div>
    </>
  );
};
