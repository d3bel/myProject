import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light py-5"
        style={{ borderStyle: "groove", borderColor: "honeydew" }}
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-success">Get In Touch</h4>
              <hr className="w-25 text-success mb-4" style={{ opacity: "1" }} />
              <p className="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt text-primary me-3"></i>123
                Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope text-primary me-3"></i>
                info@example.com
              </p>
              <p className="mb-0">
                <i className="fa fa-phone-alt text-primary me-3"></i>+012 345
                67890
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-success">Our Services</h4>
              <hr className="w-25 text-success mb-4" style={{ opacity: "1" }} />
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light" to="#">
                  <i className="fa fa-angle-right me-2"></i>Window Washing
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-success">Quick Links</h4>
              <hr className="w-25 text-success mb-4" style={{ opacity: "1" }} />
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light mb-2" to="/">
                  <i className="fa fa-angle-right me-2"></i>Home
                </Link>
                <Link className="text-light mb-2" to="/about">
                  <i className="fa fa-angle-right me-2"></i>About Us
                </Link>
                <Link className="text-light mb-2" to="/services">
                  <i className="fa fa-angle-right me-2"></i>Our Services
                </Link>
                <Link className="text-light" to="/contacts">
                  <i className="fa fa-angle-right me-2"></i>Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-success">Newsletter</h4>
              <hr className="w-25 text-success mb-4" style={{ opacity: "1" }} />
              <form action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control p-3 border-0"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-success">Sign Up</button>
                </div>
              </form>
              {/* <h6 className="text-success mt-4 mb-3">Follow Us</h6>
              <div className="d-flex">
                <Link
                  className="btn btn-lg btn-success btn-lg-square rounded-circle me-2"
                  to="#"
                >
                  <p className="fab fa-twitter"></p>
                </Link>
                <Link
                  className="btn btn-lg btn-success btn-lg-square rounded-circle me-2"
                  to="#"
                >
                  <p className="fab fa-facebook-f"></p>
                </Link>
                <Link
                  className="btn btn-lg btn-success btn-lg-square rounded-circle me-2"
                  to="#"
                >
                  <p className="fab fa-linkedin-in"></p>
                </Link>
                <Link
                  className="btn btn-lg btn-success btn-lg-square rounded-circle"
                  to="#"
                >
                  <p className="fab fa-instagram"></p>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary text-light py-4">
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
