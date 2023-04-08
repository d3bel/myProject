import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-secondary text-light py-4"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                Copyright &copy;{" "}
                <Link className="text-dark fw-bold" to="#">
                  Your Site Name
                </Link>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by{" "}
                <Link
                  className="text-dark fw-bold"
                  to="https://localhost:3000/"
                >
                  Local Computer
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
