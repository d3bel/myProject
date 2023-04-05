// import { useEffect, useState } from "react";
// import { useAuthContext } from "../context/AuthContext";
// import { createComment } from "../services/commentsService";


// export const useComments = () => {
//     // const [names, setNames] = useState("");

//   const { getUserDetails, token } = useAuthContext();

//   useEffect(() => {
//     getUserDetails()
//       .then((result) => setNames(result))
//       .catch((error) => console.log(error.message));
//   }, [getUserDetails]);

//   const postedBy = `${names.firstName} ${names.lastName}`;

//   const onCommentSubmit = async (values) => {
//     const date = new Date();
//     const options = { day: "2-digit", month: "short", year: "numeric" };
//     const formattedDate = date.toLocaleDateString("en-US", options);
//     const commentData = {
//       comments: values.comment,
//       postedBy,
//       date: formattedDate,
//     };
//     const result = await createComment(itemId, commentData);
//     console.log(result);
//   };
// }