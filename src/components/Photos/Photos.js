import React from "react";
import Nav from "../Nav/Nav";
import "./Photos.css";
import surprised from "../../img/IMG_6785.jpg";
import ringhand from "../../img/IMG_6741.jpg";

function Photos() {
  return (
    <>
      <div className="photo-gallery">
        <div className="row">
          <Nav />
          <div className="col-md-3 p-1 pt-4 text-center wow fadeIn delay-2s">
            <img src={surprised} className="photo-gallery" alt="gallery" />
          </div>
          <div className="col-md-3 p-1 pt-4 text-center wow fadeIn delay-2s">
            <img src={ringhand} className="photo-gallery" alt="gallery" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/fS4tzX9/IMG-0002-Facetune-28-09-2019-14-16-27.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/hBFJLth/IMG-8284-1.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/LNZRKsw/tiki.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/52QhpYw/168-B8-DBD-6-C9-F-4065-9-E57-3-BDB99-C1152-E-2.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/sJfWx1Q/IMG-8228-1.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-2 p-1 text-center wow fadeIn delay-2s">
            <img
              src="
              https://i.ibb.co/dbDtnC5/boat.jpg
              "
              className="photo-gallery"
              alt="gallery"
            />
          </div>
          <div className="col-md-2 p-1 text-center wow fadeIn delay-2s">
            <img
              src=" 
              https://i.ibb.co/HGgqFz1/47-BC7779-A5-DE-4-A27-B779-7-E9-F9195-C26-D-2.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
          <div className="col-md-5 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/VN71CWH/beachengage.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-3 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/fDs1nmH/IMG-8273-1.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/PGwJdBz/drake.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
          <div className="col-md-3 p-1 text-center wow fadeIn delay-2s">
            <img
              src="https://i.ibb.co/LhjXkqK/waterworkswedding.jpg"
              className="photo-gallery"
              alt="gallery"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
