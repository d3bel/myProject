import { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { commentsService } from "../../services/commentsService";
import { itemServiceFactory } from "../../services/itemService";
import { useTokenService } from "../../hooks/useTokenService";

import { AuthContext } from "../../context/AuthContext";

export const Details = () => {
  const { userId } = useContext(AuthContext);
  const [userFullName, setUserFullName] = useState("");
  const [comment, setComment] = useState("");
  const { key } = useParams();
  const [item, setItem] = useState({});
  const itemService = useTokenService(itemServiceFactory);
  const navigate = useNavigate();
  console.log(key);

  // useEffect(() => {
  //   itemService.getOneItem(itemId).then(
  //     (result) => {
  //       setItem(result);
  //     },
  //     [itemId]
  //   );
  // });

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    // const result = await commentsService.createComment(itemId, {
    //   username,
    //   comment,
    // });
  };
  return (
    <div
      className="container-fluid bg-dark text-light py-5"
      style={{ marginBottom: "0px" }}
    >
      <div className="container-fluid py-6">
        <div className="container py-5">
          <div className="row g-3 justify-content-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};
