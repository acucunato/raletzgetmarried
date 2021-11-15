import React from "react";
import "./Monogram.css";
import monogram from "../img/wedding-05.png";

function Monogram() {
  return (
    <>
      <nav class="navbar nav-x-padding navbar-expand-lg">
        <img
          className="mx-auto"
          src={monogram}
          width="125"
          height="125"
          alt="monogram"
        />
      </nav>
    </>
  );
}

export default Monogram;
