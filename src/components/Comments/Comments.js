import { useAuthContext } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { EditComment } from "./EditComment";

import styles from "./Comments.module.css";

export const Comments = ({ item, onEditComment, removeComment }) => {
  const { comments } = item;
  const { userId, gender } = useAuthContext();

  const [editingCommentId, setEditingCommentId] = useState(null);

  const handleEditComment = (commentId) => {
    setEditingCommentId(commentId);
  };

  const handleSaveComment = (editedComment) => {
    comments.map(
      (comment) =>
        comment._id === editingCommentId &&
        onEditComment(comment, editedComment, gender)
    );
    setEditingCommentId(null);
  };

  const handleCancelEditComment = () => {
    setEditingCommentId(null);
  };

  const onRemove = (id) => {
    removeComment(id);
  };

  return (
    <div className={styles["comment"]}>
      {!comments || comments.length === 0 ? (
        <h3>0 Comments</h3>
      ) : (
        <>
          <h3>{comments.length} Comments</h3>
          {comments.map((x) => (
            <div key={x._id} className={styles["commentsInfo"]}>
              <img src={x.comments.gender} alt="" />
              <div>
                <h4>
                  {x.owner?.firstName} {x.owner?.lastName}
                  <small>( {x.comments.date} )</small>
                </h4>
                <p>{x.comments.comments}</p>
                {editingCommentId !== null && x._id === editingCommentId ? (
                  <EditComment
                    comment={comments.find((c) => c._id === editingCommentId)}
                    onSave={handleSaveComment}
                    onCancel={handleCancelEditComment}
                  />
                ) : (
                  <>
                    {x._ownerId === userId && (
                      <div>
                        <Button
                          className={styles["editComment"]}
                          onClick={() => handleEditComment(x._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          className={styles["removeComment"]}
                          onClick={() => onRemove(x._id)}
                        >
                          Remove
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
