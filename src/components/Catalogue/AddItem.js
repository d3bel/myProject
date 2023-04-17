import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";
import { Errors } from "../Errors/Errors";

import styles from "./Catalogue.module.css";

export const AddItem = () => {
  const { firstName, lastName, gender } = useAuthContext();
  const { onAddItemSubmit, errors } = useItemContext();

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
      description: "",
      gender: "",
    },
    onItemSubmit
  );

  return (
    <div className={styles["addItem"]}>
      {errors && <Errors errors={errors} />}
      <div className={styles["addItemForm"]} key={values._id}>
        <h1>Add Item</h1>
        <Form onSubmit={onSubmit}>
          <fieldset>
            <Form.Group>
              <Form.Label as="label" column>
                Select Category:
              </Form.Label>
              <Col sm={10} className={styles["radio"]}>
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
          <Form.Group className={styles["title"]} controlId="themes">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="themes"
              value={values.themes}
              onChange={changeHandler}
              placeholder="Enter themes...REQUIRED"
            />
          </Form.Group>
          <Form.Group className={styles["country"]} controlId="country">
            <Form.Label>Country:</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={values.country}
              onChange={changeHandler}
              placeholder="Enter Country...REQUIRED"
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
              placeholder="Enter Image URL...REQUIRED"
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
              placeholder="Enter series...REQUIRED"
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
          <Button className={styles["send"]} type="submit">
            Submit Item
          </Button>
        </Form>
      </div>
    </div>
  );
};
