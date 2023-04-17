import Carousel from "react-bootstrap/Carousel";
import { useItemContext } from "../../context/ItemContext";

import styles from "./Home.module.css";

export const Home = () => {
  const { items } = useItemContext();
  const item1 = items[0] ? items[0] : null;
  const item2 = items[1] ? items[1] : null;
  const item3 = items[2] ? items[2] : null;
  const item4 = items[3] ? items[3] : null;
  return (
    <div className={styles["home"]}>
      <div className={styles["container-fluid"]}>
        <div className={styles["row"]}>
          <div className={styles["col"]}>
            <h1 className={styles["display-1"]}>
              Our coins or post-stamps collection's place
            </h1>
            <p className={styles["paragraph"]}>
              Welcome to our post stamps and coins collation app! Whether you're
              a seasoned collector or just starting out, our app offers a wealth
              of resources and tools to help you organize and manage your
              collection. From tracking your inventory and pricing to connecting
              with other collectors and discovering new pieces to add to your
              collection, our app has everything you need to take your passion
              for collecting to the next level.
            </p>
            <p className={styles["paragraph-2"]}>
              Sign up today and join our community of passionate collectors!
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid bg-dark text-light py-2"
      >
        <div className={styles["carousel-container"]}>
          {items?.length >= 4 && (
            <Carousel>
              <Carousel.Item interval={2500}>
                <div className={styles["carousel-item-container"]}>
                  <img
                    className={`${styles["carousel-img"]} rounded-pill`}
                    src={item1.imageUrl}
                    alt="First slide"
                  />
                  <Carousel.Caption className={styles["carousel-caption"]}>
                    <h3>{item1.themes}</h3>
                    <p>{item1.series}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <div className={styles["carousel-item-container"]}>
                  <img
                    className={`${styles["carousel-img"]} rounded-pill`}
                    src={item2.imageUrl}
                    alt="Second slide"
                  />
                  <Carousel.Caption className={styles["carousel-caption"]}>
                    <h3>{item2.themes}</h3>
                    <p>{item2.series}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>

              <Carousel.Item interval={2500}>
                <div className={styles["carousel-item-container"]}>
                  <img
                    className={`${styles["carousel-img"]} rounded-pill`}
                    src={item3.imageUrl}
                    alt="Third slide"
                  />
                  <Carousel.Caption className={styles["carousel-caption"]}>
                    <h3>{item3.themes}</h3>
                    <p>{item3.series}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2500}>
                <div className={styles["carousel-item-container"]}>
                  <img
                    className={`${styles["carousel-img"]} rounded-pill`}
                    src={item4.imageUrl}
                    alt="Fourth slide"
                  />
                  <Carousel.Caption className={styles["carousel-caption"]}>
                    <h3>{item4.themes}</h3>
                    <p>{item4.series}</p>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};
