import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { Items } from "./Items";
import { AuthContext } from "../../context/AuthContext";

export const Catalogue = ({ items }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div style={{ width: "30%", margin: "120px auto" }}>
      <h1>My List of items</h1>
      <ListGroup>
        {items?.map((item) => (
          <ListGroup.Item key={item._id} variant="dark" style={{margin: 20}}>
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Category: {item.category}</ListGroup.Item>
                <ListGroup.Item>Level: {item.level}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="success" as={Link} to="/details">
                  Details
                </Button>
                {isAuthenticated && (
                  <Button style={{marginLeft: 10}} variant="success" as={Link} to="/remove">
                    Remove
                  </Button>
                )}
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
        {isAuthenticated && (
          <>
            <Button
              as={Link}
              to="add-item"
              variant="success"
              style={{ margin: "10px" }}
            >
              Add
            </Button>
          </>
        )}
      </ListGroup>
    </div>
  );
};
