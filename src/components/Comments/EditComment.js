import { useState } from "react";

export const EditComment = ({ comment, onSave, onCancel }) => {
  const [editedComment, setEditedComment] = useState(comment.comments.comments);
  const handleSave = () => {
    onSave(editedComment);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div key={comment._id} className="popup">
      <form>
        <textarea
          value={editedComment}
          onChange={(e) => setEditedComment(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};
