import { Link } from "react-router-dom";

export const Comments = ({ item }) => {
  const comments = item;
  return (
    <div
      className="mb-5"
      style={{
        margin: "10px",
        borderBottom: "2px dashed honeydew",
        borderTop: "2px dashed honeydew",
      }}
    >
      {!comments || comments?.length === 0 ? (
        <h3 className="mb-4 mt-4">0 Comments</h3>
      ) : (
        <>
          <h3 className="mb-4 mt-4">{comments.length} Comments</h3>
          {comments.map((x) => (
            <div
              key={x._id}
              className="container d-flex mb-4"
              style={{
                margin: "5px",
                borderBottom: "1px solid honeydew",
                borderTop: "1px solid honeydew",
              }}
            >
              <img
                src="img/user.jpg"
                className="img-fluid m-2"
                style={{ width: "45px", height: "45px" }}
                alt=""
              />
              <div className="ps-3 m-2">
                <h5>
                  <div
                    style={{
                      borderRadius: "10px",
                      background: "green",
                      padding: "10px",
                    }}
                  >
                    <Link to="" style={{ color: "beige" }}>
                      {x.comments.postedBy}
                    </Link>
                  </div>
                  <small className="h6 text-white">( {x.comments.date} )</small>
                </h5>
                <div
                  style={{
                    float: "left",
                    borderRadius: "10px",
                    background: "gray",
                    padding: "10px",
                    border: "1px solid darkgray",
                  }}
                >
                  <p>{x.comments.comments}</p>
                </div>
                <button style={{margin:30}} className="btn btn-sm btn-secondary rounded-pill px-3">
                  Reply
                </button>
              </div>
            </div>
          ))}
          {/* <div className="d-flex mb-4">
            <img
              src="img/user.jpg"
              className="img-fluid"
              style={{ width: "45px", height: "45px" }}
              alt=""
            />
            <div className="ps-3">
              <h6>
                <Link to="">John Doe</Link>{" "}
                <small>
                  <i>01 Jan 2045</i>
                </small>
              </h6>
              <p>
                Diam amet duo labore stet elitr invidunt ea clita ipsum
                voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor
                rebum magna dolores sed eirmod
              </p>
              <button className="btn btn-sm btn-secondary rounded-pill px-3">
                Reply
              </button>
            </div>
          </div> */}
          {/* <div className="d-flex ms-5 mb-4">
            <img
              src="img/user.jpg"
              className="img-fluid"
              style={{ width: "45px", height: "45px" }}
              alt=""
            />
            <div className="ps-3">
              <h6>
                <Link to="">John Doe</Link>{" "}
                <small>
                  <i>01 Jan 2045</i>
                </small>
              </h6>
              <p>
                Diam amet duo labore stet elitr invidunt ea clita ipsum
                voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor
                rebum magna dolores sed eirmod
              </p>
              <button className="btn btn-sm btn-secondary rounded-pill px-3">
                Reply
              </button>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};
