import ListGroup from "react-bootstrap/ListGroup";

export const Items = ({ item }) => {
  return (
    <>
      <ListGroup.Item variant="dark" action>
        {item}
      </ListGroup.Item>
    </>
  );
};
