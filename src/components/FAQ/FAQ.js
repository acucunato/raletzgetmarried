import React from "react";
import Nav from "../Nav/Nav";

function FAQ() {
  return (
    <div className="faq">
      <div className="row">
        <Nav />
        <div className="col-md-3 pt-3 p-1 text-center wow fadeIn">
          <h1 className="faq-title justify-content-center">
            frequently asked questions
          </h1>
          <img
            src="https://i.ibb.co/5Bb6Qyd/Raletz-Engagement-074.jpg"
            className="raletz-engagement"
            alt="raletz-engagement"
          />
        </div>
        <div className="col-md-3 pt-5 p-1 text-center wow fadeIn">
          <div className="pb-3 px-4 justify-content-center">
            <h5 className="pt-5">
              <b>what should i wear?</b>
            </h5>
            <div>
              the attire for our wedding is <b>black tie optional</b>; women are
              encouranged to wear a floor-length gown, but can also wear a
              mid-length formal cocktail dress, or a pantsuit. men are
              encouranged to wear a dark suit with a shirt and tie (if they
              don't wish to wear a tuxedo).
            </div>
            <br />
            <div className="horizontal-line-sm"></div>
            <br />
            <h5>
              <b>where should i park?</b>
            </h5>
            <div>
              for your convenience, complimentary valet parking will be provided
              at our venue!
            </div>
            <br />
            <div className="horizontal-line-sm"></div>
            <br />
            <h5>
              <b>
                will transportation be provided from the hotel to the venue?
              </b>
            </h5>
            <div>
              if you're staying at one of the hotels we've suggested,
              transportation will not be provided as it is a short less than 2
              min walk to our venue.
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
