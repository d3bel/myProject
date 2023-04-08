import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useItemContext } from "../../context/ItemContext";
import { Collection } from "./Collection";
import { useState } from "react";

export const MyProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const { gender, firstName, lastName, email, userId } = useAuthContext();
  const { items } = useItemContext();

  const myCollection = items.filter((item) => item._ownerId === userId);
  const myLikes = "";
  const collectionModal = () => setShowModal(!showModal);

  return (
    <>
      <div
        className="container-fluid bg-secondary py-5 bg-hero"
        style={{ marginBottom: "0px" }}
      >
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-dark">Welcome back!</h1>
              <p className="fs-4 text-dark mb-4">This is your private space</p>
              {!showModal && myCollection.length > 0 && (
                <div className="pt-2">
                  <Link
                    onClick={collectionModal}
                    className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2"
                  >
                    My Collection
                  </Link>
                  {myLikes && (
                    <Link
                      to="/contacts"
                      className="btn btn-outline-dark rounded-pill py-md-3 px-md-5 mx-2"
                    >
                      My Favorites
                    </Link>
                  )}
                  {!myLikes && (
                    <Link
                      to="/catalogue"
                      className="btn btn-outline-dark rounded-pill py-md-3 px-md-5 mx-2"
                    >
                      No Favorites: Add items I Like
                    </Link>
                  )}
                </div>
              )}
              {showModal && (
                <Collection
                  items={myCollection}
                  collectionModal={collectionModal}
                />
              )}
              {myCollection?.length === 0 && (
                <div className="pt-2">
                  <Link
                    to="/catalogue/add-item"
                    className="btn btn-dark rounded-pill py-md-3 px-md-5 mx-2"
                  >
                    Add items to My Collection
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src={gender}
              alt="Profile-Img"
              className="img-fluid rounded-circle mb-3"
            />
            <h2 className="h4">
              {firstName} {lastName}
            </h2>
            <p className="text-muted">Coins and Post Stamps enthusiast</p>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-envelope me-2"></i>
                <Link to={`"${email}"`}>{email}</Link>
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>
                <span>Sofia, Bulgaria</span>
              </li>
              <li>
                <i className="bi bi-linkedin me-2"></i>
                <Link
                  to={`"https://www.linkedin.com/in/${firstName}-${lastName}"`}
                >
                  {firstName} {lastName}
                </Link>
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
