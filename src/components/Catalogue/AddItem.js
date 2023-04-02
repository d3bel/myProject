import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";

export const AddItem = () => {
  const [names, setNames] = useState({});
  const { getUserDetails } = useAuthContext();
  useEffect(() => {
    getUserDetails().then((result) => setNames(result));
  }, []);
  const fullName = `${names.firstName} ${names.lastName}`;
  const { onAddItemSubmit } = useItemContext();
  const { token } = useAuthContext();
  const currentDate = new Date();
  const formattedDate = currentDate
    .toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
    .split(", ");
    // const {getUserDetails} = useAuthContext()
    // const ownerName = `${getUserDetails().firstName} ${getUserDetails().lastName}`

  const { values, changeHandler, onSubmit, } = useForm(
    {
      title: "",
      category: "",
      level: "",
      imageUrl: "",
      description: "",
      createOn: "",
      ownerName: "",
    },
    onAddItemSubmit,
    token,
    formattedDate,
    // ownerName,
    fullName
  );
    console.log(fullName);
  return (
    <div
      className="container-fluid bg-dark text-light py-5"
      style={{ marginBottom: "0px" }}
    >
      <div
        className="container py-5 bg-secondary"
        style={{
          width: "30%",
          margin: "120px auto",
          borderStyle: "groove",
          borderColor: "honeydew",
        }}
        key={values._id}
      >
        <h1 style={{ width: "10%", margin: "0 auto" }}>Add Item</h1>
        <Form
          id="add-item"
          className="mb-3"
          style={{ marginLeft: "15px", width: "80%" }}
          onSubmit={onSubmit}
        >
          <Form.Group controlId="title">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={values.title}
              onChange={changeHandler}
              placeholder="Enter Title"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={values.category}
              onChange={changeHandler}
              placeholder="Enter Category"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="imageUrl">
            <Form.Label>Image URL:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              placeholder="Enter Image URL"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="level">
            <Form.Label>Level:</Form.Label>
            <Form.Control
              type="number"
              name="level"
              value={values.level}
              onChange={changeHandler}
              placeholder="Enter Level"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              type="text"
              name="description"
              value={values.description}
              onChange={changeHandler}
              placeholder="Enter Description"
              required
            />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit Item
          </Button>
        </Form>
      </div>
    </div>
    // <section id="create-item" className="auth">
    //   <form id="create" onSubmit={onSubmit}>
    //     <div className="container">
    //       <h1>Create Item</h1>
    //       <label htmlFor="title">Title:</label>
    //       <input
    //         value={values.title}
    //         onChange={changeHandler}
    //         type="text"
    //         id="title"
    //         name="title"
    //       ></input>
    //       <label htmlFor="title">Category:</label>
    //       <input
    //         value={values.category}
    //         onChange={changeHandler}
    //         type="text"
    //         id="category"
    //         name="category"
    //       ></input>
    //       <label htmlFor="title">Level:</label>
    //       <input
    //         value={values.level}
    //         onChange={changeHandler}
    //         type="text"
    //         id="level"
    //         name="level"
    //       ></input>
    //       <label htmlFor="title">Image:</label>
    //       <input
    //         value={values.imageUrl}
    //         onChange={changeHandler}
    //         type="text"
    //         id="imageUrl"
    //         name="image"
    //       ></input>
    //       <label htmlFor="title">Description:</label>
    //       <textarea
    //         value={values.description}
    //         onChange={changeHandler}
    //         type="text"
    //         id="description"
    //         name="description"
    //       ></textarea>
    //       <input className="btn submit" type="submit" value="Add Item"></input>
    //     </div>
    //   </form>
    // </section>
  );
};
