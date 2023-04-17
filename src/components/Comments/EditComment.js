import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Comments.module.css";

export const EditComment = ({ comment, onSave, onCancel }) => {
  const [editedComment, setEditedComment] = useState(comment.comments.comments);
  const handleSave = () => {
    onSave(editedComment);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div
      key={comment._id}
      className={styles["commentForm"]}
    >
      <form>
        <textarea
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
        />
      </form>
      <Button className={styles["send"]} onClick={handleSave}>
        Save
      </Button>
      <Button className={styles["sendCancel"]} onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
};
