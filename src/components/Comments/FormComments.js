import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";

import styles from "./Comments.module.css";

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

  const isComment = true;
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit,
    isComment
  );

  return (
    <div className={styles["comment"]}>
      <h3>Leave comment</h3>
      <form onSubmit={onSubmit}>
        <div className={styles["commentForm"]}>
          {isAuthenticated && (
            <>
              <textarea
                name="comment"
                value={values.comment}
                onChange={changeHandler}
                rows="5"
                cols="5"
                placeholder="Comment..."
              ></textarea>

              <div>
                <Button className={styles["leaveComment"]} type="submit">
                  Leave Your Comment
                </Button>
              </div>
            </>
          )}
          {!isAuthenticated && (
            <div className={styles["authorized"]}>
              <Button className={styles["loginButton"]} as={Link} to="/login">
                Login
              </Button>
              <Button
                className={styles["registerButton"]}
                as={Link}
                to="/register"
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
