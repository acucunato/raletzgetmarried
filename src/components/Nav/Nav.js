import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="col-md-2"></div>
      <div className="col-md-2">
        <ul class="nav flex-column wedding-nav pt-3 pb-3 wow fadeIn delay-1s">
          <li class="nav-item">
            <Link to="/">
              <a className="nav-link" href="/">
                home
              </a>
            </Link>
          </li>
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
            <a class="nav-link" href="#">
              wedding party
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              hotel room blocks
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              registry
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
