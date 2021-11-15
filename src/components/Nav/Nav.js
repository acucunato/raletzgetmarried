import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <ul class="nav flex-column wedding-nav pt-3 pb-3">
      <li class="nav-item">
        <a class="nav-link" href="#">
          photos
        </a>
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
  );
}

export default Nav;
