import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export const Items = ({ items }) => {
  const { isAuthenticated } = useAuthContext();
  return (
    <>
      <div
        className="text-center mx-auto mb-5 text-white"
        style={{ maxWidth: "500px" }}
      >
        <hr className="w-45 mx-auto text-secondary" style={{ opacity: "1" }} />
        <h1 className="display-3">Latest valuables added to our Catalog</h1>
        <hr className="w-45 mx-auto text-secondary" style={{ opacity: "1" }} />
      </div>
      <div className="row g-3">
        <div className="container col-xl-4 col-lg-6 justifyContent-center alignItems-center">
          {items.map((item) => (
            <div
              key={item._id}
              className="text-center mx-auto mb-2 text-warning "
            >
              <hr
                className="w-35 mx-auto text-warning"
                style={{ opacity: "1" }}
              />
              <h1 className="display-6">{item?.format}</h1>
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
                <img className="img-fluid w-100" src={item?.imageUrl} alt="" />
                <div className="d-flex align-items-center"></div>
                <div className="container align-content-center">
                  <div className="h6 text-warning text-center">
                    Country: <p className="text-white">{item?.country}</p>
                    Themes: <p className="text-white">{item?.themes}</p>
                    Series: <p className="text-white">{item?.series}</p>
                    Value: <p className="text-white">{item?.faceValue}</p>
                    Category: <p className="text-white">{item?.format}</p>
                    Printed quantity:{" "}
                    <p className="text-white">{item?.printRun}</p>
                    <i className="fa fa-calendar-alt text-primary mb-2"></i>
                    Issued on:
                    <p className="m-0 text-black"> {item?.issuedOn}</p>
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
                      {item?.postedBy}
                    </small>
                  </div>
                  {isAuthenticated && (
                    <div className="d-flex align-items-center">
                      <small className="ms-3">
                        <i className="fa fa-eye text-warning me-2">Views:</i>
                        12345
                      </small>
                      <small className="ms-4">
                        <Button variant="success" className="rounded-pill me-2">
                          Likes: 0
                        </Button>
                      </small>
                    </div>
                  )}
                </div>
                <Button
                  variant="outline-warning"
                  style={{ margin: 10 }}
                  as={Link}
                  to={`/catalogue/${item._id}`}
                >
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
