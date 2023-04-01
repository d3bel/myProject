import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useItem } from "../../hooks/useItem";
import { useItemContext } from "../../context/ItemContext";

export const Edit = () => {
  const { itemId } = useParams();

  const { item, token } = useItem(itemId);

  const { onEditItemSubmit } = useItemContext();

  const currentDate = new Date();

  const formattedDate = currentDate
    .toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
    .split(", ");

  const { values, changeHandler, onSubmit } = useForm(
    {
      title: "",
      category: "",
      level: "",
      imageUrl: "",
      description: "",
      createOn: "",
    },
    onEditItemSubmit,
    token,
    formattedDate,
    item
  );

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
        key={item._id}
      >
        <h1 style={{ width: "10%", margin: "0 auto" }}>Edit Item</h1>
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
          <Button
            className="rounded-pill"
            variant="outline-warning"
            type="submit"
          >
            Edit Item
          </Button>
          <Button
            className="rounded-pill"
            variant="danger"
            style={{ margin: 20 }}
            type="submit"
            as={Link}
            to={`/catalogue/${item._id}`}
          >
            Edit Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
};
