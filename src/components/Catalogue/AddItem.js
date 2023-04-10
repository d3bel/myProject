import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";

export const AddItem = () => {
  const { firstName, lastName, gender } = useAuthContext();
  const { onAddItemSubmit } = useItemContext();

  const onItemSubmit = (values) => {
    const postedBy = firstName + " " + lastName;
    const data = {
      ...values,
      gender,
      postedBy,
    };
    onAddItemSubmit(data);
  };

  const { values, changeHandler, onSubmit } = useForm(
    {
      series: "",
      country: "",
      themes: "",
      imageUrl: "",
      issuedOn: "",
      format: "",
      printedBy: "",
      faceValue: "",
      printRun: "",
      postedBy: "",
      gender: "",
    },
    onItemSubmit
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
        key={values._id}
      >
        <h1 style={{ width: "10%", margin: "0 auto" }}>Add Item</h1>
        <Form
          id="add-item"
          className="mb-3"
          style={{ marginLeft: "15px", width: "80%" }}
          onSubmit={onSubmit}
        >
          <fieldset
            className="container"
            style={{
              margin: "20px auto",
              borderStyle: "groove",
              borderColor: "honeydew",
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label as="label" column>
                Select Category:
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Stamp"
                  onChange={changeHandler}
                  name="format"
                  id="format1"
                  value="Stamp"
                />
                <Form.Check
                  type="radio"
                  label="Coin"
                  onChange={changeHandler}
                  name="format"
                  id="format2"
                  value="Coin"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group controlId="themes">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="themes"
              value={values.themes}
              onChange={changeHandler}
              placeholder="Enter themes"
              required
            />
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country:</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={values.country}
              onChange={changeHandler}
              placeholder="Enter Country"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="issuedOn">
            <Form.Label>Date of issue:</Form.Label>
            <Form.Control
              type="date"
              name="issuedOn"
              value={values.issuedOn}
              onChange={changeHandler}
              placeholder="Enter date of issue"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="faceValue">
            <Form.Label>Value:</Form.Label>
            <Form.Control
              type="text"
              name="faceValue"
              value={values.faceValue}
              onChange={changeHandler}
              placeholder="Enter value at the time"
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
          <Form.Group className="mb-3" controlId="printRun">
            <Form.Label>Printed quantity:</Form.Label>
            <Form.Control
              type="number"
              name="printRun"
              value={values.printRun}
              onChange={changeHandler}
              placeholder="Enter printed run number"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="series">
            <Form.Label>Series:</Form.Label>
            <Form.Control
              type="text"
              name="series"
              value={values.series}
              onChange={changeHandler}
              placeholder="Enter series"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="printedBy">
            <Form.Label>Printed by:</Form.Label>
            <Form.Control
              type="text"
              name="printedBy"
              value={values.printedBy}
              onChange={changeHandler}
              placeholder="Enter printed by"
              required
            />
          </Form.Group>
          <Button variant="outline-warning" type="submit">
            Submit Item
          </Button>
        </Form>
      </div>
    </div>
  );
};
