import { Link } from "react-router-dom";
export const MyProfile = () => {
  return (
    <>
      <div
        className="container-fluid bg-secondary py-5 bg-hero"
        style={{ marginBottom: "0px" }}
      >
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-dark">My Nameless Project</h1>
              <p className="fs-4 text-dark mb-4">Welcome to my profile page!</p>
              <div className="pt-2">
                <Link
                  to="/quote"
                  className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2"
                >
                  My Posts
                </Link>
                <Link
                  to="/contacts"
                  className="btn btn-outline-dark rounded-pill py-md-3 px-md-5 mx-2"
                >
                  My Comments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/300x300.png?text=Profile+Picture"
              alt="Profile-Img"
              className="img-fluid rounded-circle mb-3"
            />
            <h2 className="h4">John Doe</h2>
            <p className="text-muted">Web Developer</p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:john.doe@example.com">john.doe@example.com</a>
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                <span>New York, USA</span>
              </li>
              <li>
                <i className="bi bi-linkedin me-2"></i>
                <a href="https://www.linkedin.com/in/john-doe/">John Doe</a>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2 className="h4 mb-3">About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pellentesque ex enim, eu vehicula magna tincidunt ac. Proin
              iaculis velit nec mi ultrices tincidunt. Donec sodales mauris id
              tincidunt vestibulum. Nunc bibendum arcu sit amet orci feugiat
              tincidunt. Duis faucibus risus euismod pretium lacinia. Vivamus
              dictum nisl libero, a ullamcorper lacus tempor eget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
