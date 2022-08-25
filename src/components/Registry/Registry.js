import React from "react";
import Nav from "../Nav/Nav";
import "./Registry.css";

function Registry() {
  return (
    <div className="registry">
      <div className="row">
        <Nav />
        <div className="col-md-3 pt-5 p-1 text-center wow fadeIn">
          <img
            src="https://i.ibb.co/HN2MZ2q/Raletz-Engagement-008bw.jpg"
            className="raletz-engagement"
            alt="raletz-engagement"
          />
        </div>
        <div className="col-md-3 pt-3 p-1 text-center wow fadeIn">
          <h1 className="registry-title justify-content-center">registry</h1>
          <div className="pb-3 justify-content-center">
            <h5 className="pt-5">
              <b>crate and barrel</b>
            </h5>
            <div>
              <a
                href="https://www.crateandbarrel.com/gift-registry/alyssa-cucunato-and-michael-raletz/r6553795"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-black">
                  crate and barrel registry
                </button>
              </a>
            </div>
          </div>
          <div className="justify-content-center">
            <h5>
              <b>theknot</b>
            </h5>
            <div>
              <a
                href="https://www.theknot.com/raletzwedding/registry"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-black">
                  theknot registry
                </button>
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registry;
