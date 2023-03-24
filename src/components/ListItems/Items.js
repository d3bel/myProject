import ListGroup from "react-bootstrap/ListGroup";

export const Items = ({ line }) => {
  return (
    <>
      <ListGroup.Item variant="dark" action>
        {line}
      </ListGroup.Item>
    </>
  );
};
