import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export const Collection = ({ items, collectionModal }) => {
  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <ListGroup defaultActiveKey="#link1" key={item._id}>
            <ListGroup.Item
              style={{ padding: "0.5rem", fontSize: "0.9rem", maxWidth: "70%" }}
              action
              as={Link}
              to={`/catalogue/${item._id}`}
            >
              {item.themes}
              <img
                className="rounded-circle me-2 float-center"
                style={{ marginLeft: 20 }}
                width="30"
                height="30"
                alt=""
                src={item.imageUrl}
              />
            </ListGroup.Item>
          </ListGroup>
        ))}
      <Button
        className="rounded-pill me-2 float-end"
        variant="outline-dark"
        type="button"
        style={{ fontSize: "1.2rem", padding: "1.2rem" }}
        onClick={collectionModal}
      >
        Back to MyProfile
      </Button>
    </>
  );
};
