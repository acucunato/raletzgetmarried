import React from "react";
import "./Monogram.css";
import monogram from "../../img/wedding-05.png";
import { Link } from "react-router-dom";

function Monogram() {
  return (
    <>
      <nav class="navbar nav-x-padding navbar-expand-lg justify-content-center">
        <Link to="/">
          <a href="/">
            <img src={monogram} width="125" height="125" alt="monogram" />
          </a>
        </Link>
      </nav>
    </>
  );
}

export default Monogram;
