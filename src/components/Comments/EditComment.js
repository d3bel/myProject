import { useState } from "react";
import { Button } from "react-bootstrap";

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
      className="popup"
      
      style={{
        width: '110%',
        borderRadius: "10px",
        backgroundColor: "GrayText",
        padding: "10px",
        marginBottom: "5px",
      }}
    >
      <form>
        <textarea
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
        />
      </form>
        <Button style={{margin: "10px"}} className="rounded-pill" variant="success" onClick={handleSave}>Save</Button>
        <Button className="rounded-pill" variant="outline-danger" onClick={handleCancel}>Cancel</Button>
    </div>
  );
};
