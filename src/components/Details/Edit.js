import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { useItemContext } from "../../context/ItemContext";
import { itemServiceFactory } from "../../services/itemService";
import { useTokenService } from "../../hooks/useTokenService";
import { useItem } from "../../hooks/useItem";
import { Errors } from "../Errors/Errors";

import styles from "./Details.module.css";

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

  const { onEditItemSubmit, errors } = useItemContext();
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
    <div key={values._id} className={styles["editItem"]}>
      {errors && <Errors errors={errors} />}
      <div className={styles["editItemForm"]}>
        <h1>Edit Item</h1>
        <Form id="add-item" onSubmit={onSubmit}>
          <fieldset>
            <Form.Group>
              <Form.Label as="label" column>
                Select Category:
              </Form.Label>
              <Col sm={10} className={styles["radio"]}>
                <Form.Check
                  type="radio"
                  label="Stamp"
                  onChange={onTypeHandler}
                  name="format"
                  id="format1"
                  value="Stamp"
                />

                <Form.Check
                  type="radio"
                  label="Coin"
                  onChange={onTypeHandler}
                  name="format"
                  id="format2"
                  value="Coin"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group className={styles["title"]} controlId="themes">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="themes"
              value={values.themes}
              onChange={changeHandler}
              placeholder="Enter themes"
            />
          </Form.Group>

          <Form.Group className={styles["country"]} controlId="country">
            <Form.Label>Country:</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={values.country}
              onChange={changeHandler}
              placeholder="Enter Country"
            />
          </Form.Group>

          <Form.Group className={styles["date"]} controlId="issuedOn">
            <Form.Label>Date of issue:</Form.Label>
            <Form.Control
              type="date"
              name="issuedOn"
              value={values.issuedOn}
              onChange={changeHandler}
              placeholder="Enter date of issue"
            />
          </Form.Group>
          <Form.Group className={styles["value"]} controlId="faceValue">
            <Form.Label>Value:</Form.Label>
            <Form.Control
              type="text"
              name="faceValue"
              value={values.faceValue}
              onChange={changeHandler}
              placeholder="Enter value at the time"
            />
          </Form.Group>
          <Form.Group className={styles["imageUrl"]} controlId="imageUrl">
            <Form.Label>Image URL:</Form.Label>
            <Form.Control
              as="input"
              type="text"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              placeholder="Enter Image URL"
            />
          </Form.Group>
          <Form.Group className={styles["prints"]} controlId="printRun">
            <Form.Label>Printed quantity:</Form.Label>
            <Form.Control
              type="text"
              name="printRun"
              value={values.printRun}
              onChange={changeHandler}
              placeholder="Enter printed run number"
            />
          </Form.Group>

          <Form.Group className={styles["series"]} controlId="series">
            <Form.Label>Series:</Form.Label>
            <Form.Control
              type="text"
              name="series"
              value={values.series}
              onChange={changeHandler}
              placeholder="Enter series"
            />
          </Form.Group>
          <Form.Group className={styles["printedBy"]} controlId="printedBy">
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
          <Form.Group className={styles["description"]} controlId="description">
            <Form.Label>Item Information:</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              maxLength={200}
              rows={3}
              name="description"
              value={values.description}
              onChange={changeHandler}
              placeholder="Enter information about the item"
            />
          </Form.Group>
          <div className={styles["editContent"]}>
            <Button className={styles["editSubmit"]} type="submit">
              Edit
            </Button>
            <Button
              className={styles["cancelSubmit"]}
              as={Link}
              to={`/catalogue/${values._id}`}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
