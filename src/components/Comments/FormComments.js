import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";

export const FormComments = ({ isAuthenticated, onCreateComment }) => {
  const { token, gender, firstName, lastName } = useAuthContext();

  const onCommentSubmit = (values) => {
    const date = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const postedBy = firstName + " " + lastName;
    const commentData = {
      comments: values.comment,
      gender,
      postedBy,
      date: formattedDate,
    };

    onCreateComment(commentData, token);
  };

  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  return (
    <div className="bg-secondary p-5">
      <h3 className="mb-4 text-center">Leave Link comment</h3>
      <form onSubmit={onSubmit}>
        <div className="row g-3">
          {isAuthenticated && (
            <>
              <div className="col-12">
                <textarea
                  className="form-control bg-white border-0"
                  name="comment"
                  value={values.comment}
                  onChange={changeHandler}
                  rows="5"
                  placeholder="Comment..."
                ></textarea>
              </div>
              <div className="col-12">
                <Button className="btn btn-success w-100 py-3" type="submit">
                  Leave Your Comment
                </Button>
              </div>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Button
                className="btn w-100 py-3"
                variant="outline-warning"
                as={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                className="btn w-100 py-3"
                variant="outline-danger"
                as={Link}
                to="/register"
              >
                Register
              </Button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
