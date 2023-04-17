import { Button } from "react-bootstrap";

import styles from "./Details.module.css";
import { useAuthContext } from "../../context/AuthContext";

export const Likes = ({ item, onClickLikes, onClickDislike }) => {
  const { userId } = useAuthContext();
  const likeHandler = () => onClickLikes(item._id);
  const dislikeHandler = () => {
    const [itemLikes] = item.likes.filter((likes) => likes._ownerId === userId);
    onClickDislike(itemLikes?._id);
  };
  const liked =
    item.likes?.length > 0
      ? item.likes.find((like) => like._ownerId === userId)
      : false;
      console.log(liked);

  return (
    <div className={styles["likesButtons"]}>
      <p>likes: {item.likes?.length}</p>
      {!liked && (
        <Button className={styles["like"]} onClick={likeHandler}>
          Like
        </Button>
      )}
      {liked && (
        <Button className={styles["dislike"]} onClick={dislikeHandler}>
          Dislike
        </Button>
      )}
    </div>
  );
};
