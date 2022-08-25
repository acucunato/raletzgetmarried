import React from "react";
import Nav from "../Nav/Nav";

function RSVP() {
  return (
    <div className="rsvp">
      <div className="row">
        <Nav />
        <div className="col-md-3 pt-3 p-1 text-center wow fadeIn">
          <h1 className="rsvp-title justify-content-center">rsvp</h1>
          <div className="pb-3 justify-content-center">
            <h5 className="pt-5">
              <b>click below to rsvp</b>
            </h5>
            <div>
              <a
                href="https://www.theknot.com/us/alyssa-cucunato-and-michael-raletz-nov-2022/rsvp"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-black">
                  rsvp
                </button>
              </a>
            </div>
          </div>
          <br />
        </div>
        <div className="col-md-3 pt-5 p-1 text-center wow fadeIn">
          <img
            src="https://i.ibb.co/PM21Dhd/Raletz-Engagement-082.jpg"
            className="raletz-engagement"
            alt="raletz-engagement"
          />
        </div>
      </div>
    </div>
  );
}

export default RSVP;
