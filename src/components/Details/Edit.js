import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { useItemContext } from "../../context/ItemContext";
import { itemServiceFactory } from "../../services/itemService";
import { useTokenService } from "../../hooks/useTokenService";
import { useItem } from "../../hooks/useItem";

export const Edit = () => {
  const { itemId } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [format, setFormat] = useState("");

  const [values, setValues] = useState({
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
  });

  const { onEditItemSubmit } = useItemContext();
  const itemService = useTokenService(itemServiceFactory);
  const { token } = useItem(itemId);

  useEffect(() => {
    itemService
      .getOneItem(itemId)
      .then((result) => {
        setValues(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const onTypeHandler = (e) => {
    changeHandler(e);
    setFormat(e.target.value);
  };
  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onEditItemSubmit(values, token);
  };

  return (
    <div
      key={values._id}
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
                  onChange={onTypeHandler}
                  name="format"
                  id="format1"
                  value="Stamp"
                  required
                />

                <Form.Check
                  type="radio"
                  label="Coin"
                  onChange={onTypeHandler}
                  name="format"
                  id="format2"
                  value="Coin"
                  required
                />
              </Col>
            </Form.Group>
          </fieldset>

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
            to={`/catalogue/${values._id}`}
          >
            Edit Cancel
          </Button>
        </Form>
      </div>
    </div>
  );
};
