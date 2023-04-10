import Carousel from "react-bootstrap/Carousel";
import { useItemContext } from "../../context/ItemContext";

export const Home = () => {
  const { items } = useItemContext();
  const item1 = items ? items[0] : null;
  const item2 = items ? items[1] : null;
  const item4 = items ? items[2] : null;
  const item3 = items ? items[3] : null;
  return (
    <div
      className="container-fluid bg-secondary  py-5 bg-hero"
      style={{ marginBottom: "0px" }}
    >
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h1 className="display-1 text-dark">
              Our coins or post-stamps collection's place
            </h1>
            <p className="fs-4 text-dark mb-4">
              For every enthusiast on old valuables from our distant and not so
              distant past!
            </p>
            <div className="pt-2"></div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-light py-5 "
        style={{ borderStyle: "groove", borderColor: "honeydew" }}
      >
        <div className="container py-5">
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                style={{ width: "40%" }}
                className="rounded-pill d-block w-20"
                src={item1?.imageUrl}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{item1?.themes}</h3>
                <p>{item1?.series}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                style={{ width: "40%" }}
                className="rounded-pill d-block w-20"
                src={item2?.imageUrl}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>{item2?.themes}</h3>
                <p>{item2?.series}</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2500}>
              <img
                style={{ width: "40%" }}
                className="rounded-pill d-block w-20"
                src={item3?.imageUrl}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>{item3?.themes}</h3>
                <p>{item3?.series}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                style={{ width: "40%" }}
                className="rounded-pill d-block w-20"
                src={item4?.imageUrl}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>{item4?.themes}</h3>
                <p>{item4?.series}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
