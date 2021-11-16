import React from "react";
import Nav from "../Nav/Nav";
import "./Photos.css";
import surprised from "../../img/IMG_6785.jpg";
import ringhand from "../../img/IMG_6741.jpg";
import photo1 from "../../img/morganswedding.jpg";
import sandiego from "../../img/sandiego.jpg";
import alexaswedding from "../../img/alexawedding.jpg";
import lola from "../../img/IMG_6915.jpg";
import lolamemike from "../../img/lolamikeme.jpg";
import boat from "../../img/boat.jpg";
import seaisle from "../../img/seaisle.jpg";
import shore from "../../img/shore.jpg";

function Photos() {
  return (
    <>
      <div className="photo-gallery">
        <div className="row">
          <Nav />
          <div className="col-md-3 p-3 text-center wow fadeIn delay-2s">
            <img src={surprised} className="size350" alt="gallery" />
          </div>
          <div className="col-md-3 p-3 text-center wow fadeIn delay-2s">
            <img src={ringhand} className="size350" alt="gallery" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 p-3 text-center wow fadeIn delay-2s">
            <img src={photo1} className="snapchat" alt="gallery" />
          </div>
          <div className="col-md-3 p-3 text-center wow fadeIn delay-2s">
            <img src={sandiego} className="snapchat" alt="gallery" />
          </div>
          <div className="col-md-3 p-3 text-center wow fadeIn delay-2s">
            <img src={seaisle} className="size350" alt="gallery" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 p-3 text-center wow fadeIn delay-2s">
            <img src={alexaswedding} className="alexaswedding" alt="gallery" />
          </div>
          <div className="col-md-3 p-3 text-center wow fadeIn delay-2s">
            <img src={boat} className="size350" alt="gallery" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 p-3 text-center wow fadeIn delay-2s">
            <img src={lola} className="size310" alt="gallery" />
          </div>
          <div className="col-md-2 p-3 text-center wow fadeIn delay-2s">
            <img src={lolamemike} className="memikelola" alt="gallery" />
          </div>
          <div className="col-md-5 p-3 text-center wow fadeIn delay-2s">
            <img src={shore} className="memikelola" alt="gallery" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
