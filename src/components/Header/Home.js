import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className="container-fluid bg-secondary py-5 bg-hero"
      style={{ marginBottom: "0px" }}
    >
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="display-1 text-dark">
              We Bring Your Home To Lively Colors
            </h1>
            <p className="fs-4 text-dark mb-4">
              Need to put some text/info HERE!
            </p>
            <div className="pt-2">
              <Link
                to="/quote"
                className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2"
              >
                Get A Quote
              </Link>
              <Link
                to="/contacts"
                className="btn btn-outline-dark rounded-pill py-md-3 px-md-5 mx-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};