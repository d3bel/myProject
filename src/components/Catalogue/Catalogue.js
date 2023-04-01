import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { Items } from "./Items";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";

export const Catalogue = () => {
  const { isAuthenticated } = useAuthContext();
  const { items } = useItemContext();

  return (
    <div
      className="container-fluid bg-dark text-light py-5"
      style={{ marginBottom: "0px" }}
    >
      <div className="container bg-dark py-5">
        {items.length === 0 && (
          <div
            className="text-center mx-auto mb-5 text-white"
            style={{ maxWidth: "500px" }}
          >
            <h1 className="display-3">No content</h1>
            <hr
              className="w-25 mx-auto text-secondary"
              style={{ opacity: "1" }}
            />
          </div>
        )}
        {items.length > 0 && <Items items={items} />}
        {isAuthenticated && (
          <div className="col-12 text-center">
            <Button
              variant="outline-warning"
              as={Link}
              to="/catalogue/add-item"
              className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
            >
              Add Item
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
