import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { Items } from "./Items";

export const Catalogue = ({ items }) => {
  return (
    <div style={{ width: "30%", margin: "120px auto" }}>
      <h1>My List of items</h1>
      <ListGroup>
        {items?.map((item) => (
          <Items key={item._id} {...item} />
        ))}
        <Button
          as={Link}
          to="add-item"
          variant="success"
          style={{ margin: "10px" }}
        >
          Add
        </Button>
      </ListGroup>
    </div>
  );
};
