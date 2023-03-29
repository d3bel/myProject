import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export const Details = () => {
  return (
    <div
      className="container-fluid bg-dark text-light py-5"
      style={{ marginBottom: "0px" }}
    >
      <div className="container-fluid py-6">
        <div className="container py-5">
          <div className="row g-3">
            <div className="col-lg-6">
              {/* <!-- Blog Detail Start --> */}
              <div
                className="blog-item bg-secondary"
                style={{
                  margin: "10px",
                  borderStyle: "groove",
                  borderColor: "honeydew",
                }}
              >
                <img className="img-fluid w-100" src={"/logo192.png"} alt="" />
                <div className="d-flex align-items-center">
                  <div
                    className="bg-secondary mt-n4 d-flex flex-column flex-shrink-0 justify-content-center text-center me-4"
                    style={{ width: "60px", height: "100px" }}
                  >
                    <i className="fa fa-calendar-alt text-primary mb-2"></i>
                    <p className="m-0 text-black">Jan 01</p>
                    <small className="text-black">2045</small>
                  </div>
                  <div className="h4 m-0 text-white me-4">
                    {/* '{item.description}' */} Discription here
                  </div>
                </div>
                <div className="d-flex justify-content-between border-top border-secondary p-4">
                  <div className="d-flex align-items-center">
                    <img
                      className="rounded-circle me-2"
                      src="{item.imageUrl}"
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
                <div className="text-left m-2">Category: non yet</div>
                <div className="text-left m-2">max Level: 10</div>
                <Button
                  variant="outline-warning"
                  style={{ margin: 10 }}
                  as={Link}
                  to="/catalogue/:id/details"
                >
                  {" "}
                  Details{" "}
                </Button>
                {/* <div className="mb-5">
                <img
                  className="img-fluid w-100 mb-5"
                  src="img/blog-2.jpg"
                  alt=""
                />
                <h1 className="mb-4">
                  Diam dolor duo ipsum clita sed lorem tempor. Clita kasd diam
                  justo diam lorem sed amet sed rebum eos.
                </h1>
                <p>
                  Sadipscing labore amet rebum est et justo gubergren. Et eirmod
                  ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                  sanctus rebum et lorem magna kasd, stet amet magna accusam
                  consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                  sanctus et. Ipsum sit gubergren dolores et, consetetur justo
                  invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                  dolores diam nonumy, gubergren sit stet no diam kasd vero.
                </p>
                <p>
                  Voluptua est takimata stet invidunt sed rebum nonumy stet,
                  clita aliquyam dolores vero stet consetetur elitr takimata
                  rebum sanctus. Sit sed accusam stet sit nonumy kasd diam
                  dolores, sanctus lorem kasd duo dolor dolor vero sit et.
                  Labore ipsum duo sanctus amet eos et. Consetetur no sed et
                  aliquyam ipsum justo et, clita lorem sit vero amet amet est
                  dolor elitr, stet et no diam sit. Dolor erat justo dolore sit
                  invidunt.
                </p>
                <p>
                  Diam dolor est labore duo invidunt ipsum clita et, sed et
                  lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                  dolores sit kasd diam takimata justo diam lorem sed. Magna
                  amet sed rebum eos. Clita no magna no dolor erat diam tempor
                  rebum consetetur, sanctus labore sed nonumy diam lorem amet
                  eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                  sadipscing gubergren erat. Gubergren at lorem invidunt
                  sadipscing rebum sit amet ut ut, voluptua diam dolores at
                  sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.
                </p>
              </div> */}
                {/* <!-- Blog Detail End --> */}

                {/* <!-- Comment List Start --> */}
                <div
                  className="mb-5"
                  style={{
                    margin: "10px",
                    borderBottom: "2px dashed honeydew",
                    borderTop: "2px dashed honeydew",
                  }}
                >
                  <h3 className="mb-4 mt-4">3 Comments</h3>
                  <div
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
                      <h6>
                        <Link to="">John Doe</Link>{" "}
                        <small>
                          <i>01 Jan 2045</i>
                        </small>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr invidunt ea clita ipsum
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed eirmod
                      </p>
                      <button className="btn btn-sm btn-secondary rounded-pill px-3">
                        Reply
                      </button>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
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
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed eirmod
                      </p>
                      <button className="btn btn-sm btn-secondary rounded-pill px-3">
                        Reply
                      </button>
                    </div>
                  </div>
                  <div className="d-flex ms-5 mb-4">
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
                        voluptua, tempor labore accusam ipsum et no at. Kasd
                        diam tempor rebum magna dolores sed eirmod
                      </p>
                      <button className="btn btn-sm btn-secondary rounded-pill px-3">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Comment List End --> */}

                {/* <!-- Comment Form Start --> */}
                <div className="bg-secondary p-5">
                  <h3 className="mb-4">Leave Link comment</h3>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control bg-white border-0"
                          placeholder="Your Name"
                          style={{ height: "55px" }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control bg-white border-0"
                          placeholder="Your Email"
                          style={{ height: "55px" }}
                        />
                      </div>
                      {/* <div className="col-12">
                    <input
                    type="text"
                    className="form-control bg-white border-0"
                    placeholder="Website"
                    style={{ height: "55px" }}
                    />
                  </div> */}
                      <div className="col-12">
                        <textarea
                          className="form-control bg-white border-0"
                          rows="5"
                          placeholder="Comment"
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <Button
                          className="btn btn-success w-100 py-3"
                          type="submit"
                        >
                          Leave Your Comment
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- Comment Form End --> */}
              </div>
            </div>

            {/* <!-- Sidebar Start --> */}
            {/* <div className="col-lg-4"> */}
            {/* <!-- Search Form Start --> */}
            {/* <div className="mb-5">
              <div className="input-group">
              <input
              type="text"
              className="form-control p-3"
              placeholder="Keyword"
              />
              <button className="btn btn-primary px-4">
              <i className="fa fa-search"></i>
              </button>
              </div>
            </div> */}
            {/* <!-- Search Form End --> */}

            {/* <!-- Category Start --> */}
            {/* <div className="mb-5">
              <h3 className="mb-4">Categories</h3>
              <div className="d-flex flex-column justify-content-start bg-primary p-4">
              <Link className="h5 mb-4" to="#">
              <i className="fa fa-angle-right me-2"></i>Web Design
              </Link>
              <Link className="h5 mb-4" to="#">
              <i className="fa fa-angle-right me-2"></i>Web Development
              </Link>
              <Link className="h5 mb-4" to="#">
              <i className="fa fa-angle-right me-2"></i>Web Development
              </Link>
              <Link className="h5 mb-4" to="#">
              <i className="fa fa-angle-right me-2"></i>Keyword Research
              </Link>
              <Link className="h5 mb-0" to="#">
              <i className="fa fa-angle-right me-2"></i>Email Marketing
              </Link>
              </div>
            </div> */}
            {/* <!-- Category End --> */}

            {/* <!-- Recent Post Start --> */}
            {/* <div className="mb-5">
              <h3 className="mb-4">Recent Post</h3>
              <div className="bg-primary p-4">
              <div className="d-flex mb-3">
              <img
              className="img-fluid"
              src="img/blog-1.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                    />
                    <Link
                    to=""
                    className="h5 d-flex align-items-center bg-white px-3 mb-0"
                    >
                    Lorem ipsum dolor sit amet consec adipis
                    </Link>
                    </div>
                    <div className="d-flex mb-3">
                    <img
                    className="img-fluid"
                    src="img/blog-2.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                    />
                    <Link
                    to=""
                    className="h5 d-flex align-items-center bg-white px-3 mb-0"
                    >
                    Lorem ipsum dolor sit amet consec adipis
                  </Link>
                  </div>
                  <div className="d-flex mb-3">
                  <img
                  className="img-fluid"
                  src="img/blog-3.jpg"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  alt=""
                  />
                  <Link
                  to=""
                  className="h5 d-flex align-items-center bg-white px-3 mb-0"
                  >
                  Lorem ipsum dolor sit amet consec adipis
                  </Link>
                  </div>
                  <div className="d-flex mb-3">
                  <img
                  className="img-fluid"
                  src="img/blog-1.jpg"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                    alt=""
                    />
                    <Link
                    to=""
                    className="h5 d-flex align-items-center bg-white px-3 mb-0"
                    >
                    Lorem ipsum dolor sit amet consec adipis
                    </Link>
                    </div>
                    <div className="d-flex mb-3">
                    <img
                    className="img-fluid"
                    src="img/blog-2.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                    />
                    <Link
                    to=""
                    className="h5 d-flex align-items-center bg-white px-3 mb-0"
                    >
                    Lorem ipsum dolor sit amet consec adipis
                    </Link>
                    </div>
                    <div className="d-flex">
                    <img
                    className="img-fluid"
                    src="img/blog-3.jpg"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    alt=""
                    />
                    <Link
                    to=""
                    className="h5 d-flex align-items-center bg-white px-3 mb-0"
                    >
                    Lorem ipsum dolor sit amet consec adipis
                    </Link>
                    </div>
                    </div>
                  </div> */}
            {/* <!-- Recent Post End --> */}

            {/* <!-- Image Start --> */}
            {/* <div className="mb-5">
              <img src="img/blog-1.jpg" alt="" className="img-fluid" />
            </div> */}
            {/* <!-- Image End --> */}

            {/* <!-- Tags Start --> */}
            {/* <div className="mb-5"> */}
            {/* <h3 className="mb-4">Tag Cloud</h3>
              <div className="d-flex flex-wrap m-n1">
              <Link
              to=""
              className="btn btn-outline-secondary rounded-pill px-3 m-1"
              >
              Design
              </Link>
                <Link
                  to=""
                  className="btn btn-outline-secondary rounded-pill px-3 m-1"
                  >
                  Development
                  </Link>
                  <Link
                  to=""
                  className="btn btn-outline-secondary rounded-pill px-3 m-1"
                  >
                  Marketing
                  </Link>
                  <Link
                  to=""
                  className="btn btn-outline-secondary rounded-pill px-3 m-1"
                  >
                  SEO
                  </Link>
                  <Link
                  to=""
                  className="btn btn-outline-secondary rounded-pill px-3 m-1"
                  >
                  Writing
                  </Link>
                  <Link
                  to=""
                  className="btn btn-outline-secondary rounded-pill px-3 m-1"
                  >
                  Consulting
                  </Link>
                  <Link
                  to=""
                  className="btn btn-outline-secondary rounded-pill px-3 m-1"
                >
                Design
                </Link>
                <Link
                to=""
                className="btn btn-outline-secondary rounded-pill px-3 m-1"
                >
                Development
                </Link>
                <Link
                to=""
                className="btn btn-outline-secondary rounded-pill px-3 m-1"
                >
                Marketing
                </Link>
                <Link
                to=""
                className="btn btn-outline-secondary rounded-pill px-3 m-1"
                >
                SEO
                </Link>
                <Link
                to=""
                className="btn btn-outline-secondary rounded-pill px-3 m-1"
                >
                Writing
                </Link>
                <Link
                to=""
                className="btn btn-outline-secondary rounded-pill px-3 m-1"
                >
                  Consulting
                </Link>
              </div> */}
            {/* </div> */}
            {/* <!-- Tags End --> */}

            {/* <!-- Plain Text Start --> */}
            {/* <div>
              <h3 className="mb-4">Plain Text</h3>
              <div
              className="bg-primary text-center"
              style={{ padding: "30px" }}
              >
              <p>
              Vero sea et accusam justo dolor accusam lorem consetetur,
              dolores sit amet sit dolor clita kasd justo, diam accusam no
              sea ut tempor magna takimata, amet sit et diam dolor ipsum
              amet diam
              </p>
              <Link
              to=""
              className="btn btn-secondary rounded-pill py-2 px-4"
              >
              Read More
              </Link>
              </div>
            </div> */}
            {/* <!-- Plain Text End --> */}
            {/* </div> */}
            {/* <!-- Sidebar End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
