import React from "react";
import "./HPContainer.css";
import { Link } from "react-router-dom";

function HPContainer() {
  return (
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-2">
        <ul class="nav flex-column wedding-nav pt-3 pb-3 wow fadeIn">
          <li class="nav-item">
            <Link to="/details">
              <a className="nav-link" href="/details">
                details
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/photos">
              <a className="nav-link" href="/photos">
                photos
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/wedding-party">
              <a className="nav-link" href="/wedding-party">
                wedding party
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/hotel-room-blocks">
              <a className="nav-link" href="/hotel-room-blocks">
                hotel room blocks
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/registry">
              <a className="nav-link" href="/registry">
                registry
              </a>
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/rsvp">
              <a className="nav-link" href="/rsvp">
                rsvp
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-5 pt-3 p-1 wow fadeIn ">
        <div className="hero-image mx-auto"></div>
      </div>

      <div className="col-md-1 px-5 details wow fadeIn ">
        <div className="quote">but i know now i've found the one i love.</div>
      </div>
    </div>
  );
}

export default HPContainer;
