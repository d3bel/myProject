import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

export const Items = ({ items }) => {


  return (
    <>
      <div
        className="text-center mx-auto mb-5 text-white"
        style={{ maxWidth: "500px" }}
      >
        <h1 className="display-3">Latest Articles From Item's Blog</h1>

        <hr className="w-25 mx-auto text-secondary" style={{ opacity: "1" }} />
      </div>
      <div className="row g-3">
        <div className="container col-xl-4 col-lg-6 justifyContent-center alignItems-center">
          {items.map((item) => (
            <div
              className="blog-item bg-secondary "
              key={item._id}
              style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
                borderStyle: "groove",
                borderColor: "honeydew",
              }}
            >
              <img className="img-fluid w-100" src={item.imageUrl} alt="" />
              <div className="d-flex align-items-center">
                <div
                  className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                  style={{ width: "60px", height: "100px" }}
                >
                  <i className="fa fa-calendar-alt text-primary mb-2"></i>
                  <p className="m-0 text-black">{item.createOn}</p>
                  <small className="text-black">{item.createOn}</small>
                </div>
                <div className="h4 m-0 text-white me-4">{item.description}</div>
                <div className="m-0 text-white me-4">
                  Category: {item.category}
                </div>
              </div>
              <div className="d-flex justify-content-between border-top border-secondary p-4">
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle me-2"
                    src={item.imageUrl}
                    width="30"
                    height="30"
                    alt=""
                  />
                  <small className="text-uppercase">
                    FirstName and LastName
                  </small>
                </div>
                <div className="d-flex align-items-center">
                  <small className="ms-3">
                    <i className="fa fa-eye text-secondary me-2"></i>12345
                  </small>
                  <small className="ms-3">
                    <i className="fa fa-comment text-secondary me-2"></i>123
                  </small>
                </div>
              </div>
              <div className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4">
                max Level: {item.level}
              </div>
              <Button
                variant="outline-warning"
                style={{ margin: 10 }}
                as={Link}
                to={`/catalogue/${item._id}`}
              >
                {" "}
                Details{" "}
              </Button>
            </div>
          ))}
          {/* {isAuthenticated && (
            <div className="col-12 text-end">
              <Button
                variant="outline-warning"
                as={Link}
                to="/catalogue/add-item"
                className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
              >
                Add Item
              </Button>
            </div>
          )} */}
        </div>
        {/* <div className="col-12 text-center">
          <Link
            to=""
            className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
          >
            Load More
          </Link>
        </div> */}
      </div>
    </>
  );
};
