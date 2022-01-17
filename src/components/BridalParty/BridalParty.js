import React from "react";
import Nav from "../Nav/Nav";
import "./BridalParty.css";
import bridesmaids from "./bridesmaids.json";
import groomsman from "./groomsmen.json";
// import kids from "./flowergirlringbearer.json";

function BridalParty() {
  return (
    <>
      <div className="wedding-party">
        <div className="row">
          <Nav />
          <div className="col-md-3 pt-3 p-1 text-center wow fadeIn">
            <div className="card">
              <img
                className="card-img-top rounded-circle weddingparty-img mx-auto"
                src="https://i.ibb.co/7X1wyFq/gina.jpg"
                alt="wedding-party"
              />
              <div className="card-body">
                <h1 className="card-title">gina cucunato</h1>
                <b className="card-text">maid of honor</b>
              </div>
            </div>
          </div>
          <div className="col-md-3 pt-3 p-1 text-center wow fadeIn">
            <div className="card">
              <img
                className="card-img-top rounded-circle weddingparty-img mx-auto"
                src="https://i.ibb.co/YpWGzv6/valen.jpg"
                alt="wedding-party"
              />
              <div className="card-body">
                <h1 className="card-title">valen fecca</h1>
                <b className="card-text">matron of honor</b>
              </div>
            </div>
          </div>
        </div>
        {/* bridesmaids */}
        <div className="row justify-content-center weddingparty-rows">
          {bridesmaids.map((bridesmaid) => (
            <div className="col-md-4 pt-3 p-1 text-center wow fadeIn ">
              <div className="card">
                <img
                  className="card-img-top rounded-circle weddingparty-img mx-auto"
                  src={bridesmaid.photo}
                  alt="wedding-party"
                />
                <div className="card-body">
                  <h1 className="card-title">{bridesmaid.name}</h1>
                  <b className="card-text">{bridesmaid.title}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="horizontal-line-sm wow fadeIn "></div>
        {/* groomsmen */}
        <div className="row justify-content-center weddingparty-rows">
          {groomsman.map((groomsman) => (
            <div className="col-md-4 pt-3 p-1 text-center wow fadeIn ">
              <div className="card">
                <img
                  className="card-img-top rounded-circle weddingparty-img mx-auto"
                  src={groomsman.photo}
                  alt="wedding-party"
                />
                <div className="card-body">
                  <h1 className="card-title">{groomsman.name}</h1>
                  <b className="card-text">{groomsman.title}</b>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="horizontal-line-sm wow fadeIn "></div> */}

        {/* flower girl ring bearer */}
        {/* <div className="row justify-content-center weddingparty-rows">
          {kids.map((kid) => (
            <div className="col-md-4 pt-3 p-1 text-center wow fadeIn ">
              <div className="card">
                <img
                  className="card-img-top rounded-circle weddingparty-img mx-auto"
                  src={kid.photo}
                  alt="wedding-party"
                />
                <div className="card-body">
                  <h1 className="card-title">{kid.name}</h1>
                  <b className="card-text">{kid.title}</b>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}

export default BridalParty;
