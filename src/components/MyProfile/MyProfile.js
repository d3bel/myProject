import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";
import { useEffect, useState } from "react";

import { useItem } from "../../hooks/useItem";
import { MyLikes } from "./MyLikes";
import { Collection } from "./Collection";

import styles from "./MyProfile.module.css";

export const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [likeModal, setLikesModal] = useState(false);
  const [likes, setLikes] = useState({});

  const { gender, firstName, lastName, email, userId } = useAuthContext();
  const { items } = useItemContext();
  const { myLikes } = useItem();

  useEffect(() => {
    myLikes(userId).then((likes) => setLikes(likes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const myCollection = items.filter((item) => item._ownerId === userId);

  const collectionModal = () => setShowModal(!showModal);
  const likesModal = () => setLikesModal(!likeModal);

  return (
    <>
      <div className={styles["profile"]}>
        <h1>Welcome!</h1>
        <h4>This is your private space</h4>
        {!showModal && !likeModal && (
          <div className={styles["myButtons"]}>
            {myCollection.length > 0 && (
              <Link
                onClick={collectionModal}
                className={styles["myCollection"]}
              >
                My Collection
              </Link>
            )}
            {likes.length > 0 && (
              <Link onClick={likesModal} className={styles["myLikes"]}>
                My Favorites
              </Link>
            )}
            {likes.length <= 0 && <p>No Favorites yet!</p>}
          </div>
        )}
        {showModal && (
          <Collection items={myCollection} collectionModal={collectionModal} />
        )}
        {likeModal && (
          <MyLikes items={items} likes={likes} likesModal={likesModal} />
        )}
        {myCollection?.length === 0 && !likeModal && (
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
                  to={`https://www.linkedin.com/in/${firstName}-${lastName}`}
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
