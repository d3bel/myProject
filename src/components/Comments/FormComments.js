import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { createComment } from "../../services/commentsService";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
// import { useState, useEffect } from "react";

export const FormComments = ({ isAuthenticated, itemId, onCreateComment }) => {
  // const [names, setNames] = useState("");

  const { getUserDetails, token } = useAuthContext();

  // useEffect(() => {
  //   getUserDetails()
  //     .then((result) => setNames(result))
  //     .catch((error) => console.log(error.message));
  // }, [getUserDetails]);

  // const postedBy = names;
  // console.log(names);

  const onCommentSubmit = async (values) => {
    const date = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const commentData = {
      comments: values.comment,
      // postedBy,
      date: formattedDate,
    };
    const result = await createComment(itemId, commentData, token);
    onCreateComment(result);
  };

  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
      // postedBy: "",
    },
    onCommentSubmit,
    token,
    // postedBy
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
