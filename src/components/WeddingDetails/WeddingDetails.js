import React from "react";
import Nav from "../Nav/Nav";
import "./WeddingDetails.css";

function WeddingDetails() {
  return (
    <>
      <div className="details-pg">
        <div className="row">
          <Nav />
          <div className="col-md-4 pt-3 text-center">
            <h1>we can't wait to celebrate with you</h1>
            <div className="hero-image-wd mx-auto"></div>
            <div className="horizontal-line-sm"></div>
          </div>

          <div className="col-md-2 text-center pt-3 details-info">
            <h5>
              <b>ceremony</b> <span className="andsign">&</span>{" "}
              <b>reception</b>
            </h5>
            <div>arts ballroom</div>
            <div>1324 locust st, philadelphia, pa 19107</div>
            <div className="small">4:30pm-11pm</div>
            <br />
            <div>attire: black tie optional</div>
            <br />
            <div>
              <h5>
                <b>after party</b>
              </h5>
              <div>arts ballroom</div>
              <div>1324 locust st, philadelphia, pa 19107</div>
              <div className="small">11pm-12:30pm</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeddingDetails;
