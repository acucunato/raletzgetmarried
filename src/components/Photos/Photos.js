import React from "react";
import Nav from "../Nav/Nav";
import "./Photos.css";
import surprised from "../../img/IMG_6785.jpg";
import ringhand from "../../img/IMG_6741.jpg";
import photo1 from "../../img/morganswedding.jpg";
import photo2 from "../../img/seaisle.jpg";
import nye from "../../img/2019.jpg";
import sandiego from "../../img/sandiego.jpg";
import alexaswedding from "../../img/alexawedding.jpg";
import lola from "../../img/IMG_6915.jpeg";
import lolamemike from "../../img/lolamikeme.jpg";
import sunset from "../../img/sunset.jpg";

function Photos() {
  return (
    <>
      <div className="photo-gallery">
        <div className="row">
          <Nav />
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <h1>our photo gallery</h1>
            <img
              src={surprised}
              className="size350"
              width="350"
              height="550"
              alt="monogram"
            />
          </div>
          <div className="col-md-4 pt-5 text-center wow fadeIn delay-2s">
            <img
              src={ringhand}
              className="size350"
              width="350"
              height="550"
              alt="monogram"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={photo1}
              className="snapchat"
              width="310"
              height="550"
              alt="monogram"
            />
          </div>
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={photo2}
              className="snapchat"
              width="310"
              height="550"
              alt="monogram"
            />
          </div>
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={sandiego}
              className="snapchat"
              width="310"
              height="550"
              alt="monogram"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={alexaswedding}
              className="alexaswedding"
              width="600"
              height="400"
              alt="monogram"
            />
          </div>
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={nye}
              className="size310"
              width="310"
              height="400"
              alt="monogram"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={lola}
              className="size310"
              width="310"
              height="450"
              alt="monogram"
            />
          </div>
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={sunset}
              className="size310"
              width="310"
              height="450"
              alt="monogram"
            />
          </div>
          <div className="col-md-3 pt-3 text-center wow fadeIn delay-2s">
            <img
              src={lolamemike}
              className="memikelola"
              width="350"
              height="450"
              alt="monogram"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
