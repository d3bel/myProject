import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useItem } from "../../hooks/useItem";
import { useItemContext } from "../../context/ItemContext";
import { Comments } from "../Comments/Comments";
import { FormComments } from "../Comments/FormComments";

export const Details = () => {
  const { itemId } = useParams();
  const {
    item,
    isAuthenticated,
    isOwner,
    onCreateComment,
    onEditComment,
    removeComment,
  } = useItem({
    itemId,
  });
  const { onRemoveItem } = useItemContext();
  const [confirmation, setConfirmation] = useState(false);

  const handleRemove = () => setConfirmation(true);

  const onRemoveItemHandler = () => {
    onRemoveItem(itemId);
    setConfirmation(false);
  };
  return (
    <div
      key={item._id}
      className="container-fluid bg-dark text-light py-5"
      style={{ marginBottom: "0px" }}
    >
      <div className="container-fluid py-6">
        <div className="container py-5">
          <div className="row g-3 justify-content-center">
            <div className="col-lg-6">
              {/* <!-- Item Detail Start --> */}
              <div className="text-center mx-auto mb-2 text-warning ">
                <hr
                  className="w-35 mx-auto text-warning"
                  style={{ opacity: "1" }}
                />
                <h1 className="display-6">{item.themes}</h1>
                <hr
                  className="w-35 mx-auto text-warning"
                  style={{ opacity: "1" }}
                />
                <div
                  className="item-details bg-secondary"
                  style={{
                    margin: "10px",
                    borderStyle: "groove",
                    borderColor: "honeydew",
                  }}
                >
                  <img className="img-fluid w-100" src={item.imageUrl} alt="" />
                  <div className="d-flex align-items-center"></div>
                  <div className="container align-content-center">
                    <div className="h6 text-warning text-center">
                      Country: <p className="text-white">{item.country}</p>
                      Series: <p className="text-white">{item.series}</p>
                      Value: <p className="text-white">{item.faceValue}</p>
                      Category: <p className="text-white">{item.format}</p>
                      Printed quantity:{" "}
                      <p className="text-white">{item.printRun}</p>
                      <i className="fa fa-calendar-alt text-primary mb-2"></i>
                      Issued on:
                      <p className="m-0 text-black"> {item.issuedOn}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between border-top border-secondary p-4">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-2"
                        src={item.gender}
                        width="30"
                        height="30"
                        alt=""
                      />
                      <small className="text-uppercase text-white">
                        {item.postedBy}
                      </small>
                    </div>
                  </div>
                  {isOwner && (
                    <>
                      <Button
                        className="btn-secondary rounded-pill"
                        variant="outline-warning"
                        style={{ margin: 10 }}
                        as={Link}
                        to={`/catalogue/edit/${itemId}`}
                      >
                        Edit
                      </Button>
                      <Button
                        className="btn-secondary rounded-pill"
                        variant="outline-danger"
                        style={{ margin: 10 }}
                        onClick={handleRemove}
                      >
                        Remove
                      </Button>
                      {confirmation && (
                        <div className="container text-center">
                          <p style={{ color: "honeydew" }}>
                            Are you sure you want to remove this item?
                          </p>
                          <Button
                            className="btn-secondary rounded-pill"
                            variant="danger"
                            onClick={onRemoveItemHandler}
                          >
                            Yes
                          </Button>
                          <Button
                            className="btn-secondary rounded-pill"
                            variant="success"
                            onClick={() => setConfirmation(false)}
                          >
                            No
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <Comments
                  item={item}
                  onEditComment={onEditComment}
                  removeComment={removeComment}
                />
                <FormComments
                  isAuthenticated={isAuthenticated}
                  itemId={itemId}
                  onCreateComment={onCreateComment}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
