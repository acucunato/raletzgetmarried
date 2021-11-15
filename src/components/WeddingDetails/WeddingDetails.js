import React from "react";
import "./WeddingDetails.css";

function WeddingDetails() {
  return (
    <div className="details text-center">
      <div className="row justify-content-center pt-4">
        <div className="col-md-3">
          <h1 className="date">november 11, 2022</h1>
        </div>
        <div className="col-md-3">
          <h1>philadelphia, pa</h1>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="row justify-content-center py-3">
        <div className="col-md-5">
          <h1>details</h1>
          <div className="horizontal-line-sm"></div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h5>
            <b>ceremony</b> <span className="andsign">&</span> <b>reception</b>
          </h5>
          <div>arts ballroom</div>
          <div>1324 locust st, philadelphia, pa 19107</div>
          <br />
          <div>attire: black tie optional</div>
          {/* <div className="small">4:30pm-11pm</div> */}
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h5>
            <b>after party</b>
          </h5>
          <div>arts ballroom</div>
          <div>1324 locust st, philadelphia, pa 19107</div>
          {/* <div className="small">11pm-12:30pm</div> */}
        </div>
      </div>
    </div>
  );
}

export default WeddingDetails;
