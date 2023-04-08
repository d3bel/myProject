import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { EditComment } from "./EditComment";

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
    <div
      className="mb-5"
      style={{
        margin: "10px",
        borderBottom: "2px dashed honeydew",
        borderTop: "2px dashed honeydew",
      }}
    >
      {!comments || comments.length === 0 ? (
        <h3 className="mb-4 mt-4">0 Comments</h3>
      ) : (
        <>
          <h3 className="mb-4 mt-4">{comments.length} Comments</h3>
          {comments.map((x) => (
            <div
              key={x._id}
              style={{
                margin: "5px",
                borderBottom: "1px solid honeydew",
                borderTop: "1px solid honeydew",
              }}
              className="d-flex mb-4"
            >
              <img
                src={x.comments.gender}
                className="img-fluid"
                style={{ width: "45px", height: "45px" }}
                alt=""
              />
              <div className="ps-3">
                <h6>
                  <Link to="">
                    {x.owner?.firstName} {x.owner?.lastName}
                  </Link>{" "}
                  <small>
                    <i>( {x.comments.date} )</i>
                  </small>
                </h6>
                <p
                  style={{                    
                    float: "center",
                    borderRadius: "10px",
                    background: "gray",
                    padding: "10px",
                    border: "1px solid darkgray",
                    
                  }}
                >
                  {x.comments.comments}
                </p>
                {/* {x._ownerId !== userId && (
                  <Button
                    variant="success"
                    style={{ margin: 30 }}
                    className="btn btn-sm btn-secondary rounded-pill px-3"
                  >
                    Reply
                  </Button>
                )} */}
                {editingCommentId !== null && x._id === editingCommentId ? (
                  <EditComment
                    comment={comments.find((c) => c._id === editingCommentId)}
                    onSave={handleSaveComment}
                    onCancel={handleCancelEditComment}
                  />
                ) : (
                  <>
                    {x._ownerId === userId && (
                      <>
                        <Button
                          style={{ margin: 30 }}
                          variant="outline-warning"
                          className="btn btn-sm btn-dark text-white px-5"
                          onClick={() => handleEditComment(x._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline-danger"
                          className="btn btn-sm btn-dark text-white px-3"
                          onClick={() => onRemove(x._id)}
                        >
                          Remove
                        </Button>
                      </>
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
