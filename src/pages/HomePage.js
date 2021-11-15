import React from "react";
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Monogram from "../components/Monogram/Monogram";
import Nav from "../components/Nav/Nav";
import WeddingDetails from "../components/WeddingDetails/WeddingDetails";

function HomePage() {
  return (
    <>
      <Monogram />
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-2">
          <ul class="nav flex-column wedding-nav pt-3 pb-3">
            <li class="nav-item">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  details
                </a>
              </li>
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
        </div>
        <div className="col-md-5 pt-3">
          <div className="hero-image mx-auto"></div>
        </div>

        <div className="col-md-1 px-5 details">
          <div className="quote">but i know now i've found the one i love.</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
