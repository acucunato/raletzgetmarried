import React from "react";
import Nav from "../Nav/Nav";
import "./HotelRoom.css";
import cambria from "../../img/cambria.jpg";
import doubletree from "../../img/doubletree.jpg";

function HotelRoom() {
  return (
    <>
      <>
        <div className="registry">
          <div className="row">
            <Nav />
            <div className="col-md-3 pt-3 p-1 text-center wow fadeIn delay-1s">
              <h1 className="hotel-title">we'd love for you to stay</h1>
              <div className="cambria-hotel-container justify-content-center">
                <img
                  src={cambria}
                  className="cambria-hotel"
                  alt="cambria-hotel"
                />

                <h5 className="pt-2">
                  <b>cambria hotel</b>
                </h5>
                <div>219 s broad st, philadelphia, pa 19107</div>
                <div>(215) 732-5500</div>
                <br />
                <div className="reservations">
                  <div>
                    <b>to reserve rooms</b>
                  </div>
                  <div className="small">
                    call 1(877) 424-6423 and request the room rate for
                  </div>
                  <div>
                    cucunato <span className="andsign">&</span> raletz wedding
                  </div>
                  <div className="small">
                    or reserve online by clicking button below
                  </div>
                  <div className="small text-muted">
                    <i>must reserve before october 11, 2022</i>
                  </div>
                </div>
                <br />
                <div>
                  <button type="button" class="btn btn-black">
                    coming soon
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-3 pt-5 p-1 text-center wow fadeIn delay-1s">
              <div className="doubletree-hotel-container justify-content-center">
                <h5>
                  <b>doubletree hilton center city</b>
                </h5>
                <div>237 s broad st, philadelphia, pa 19107</div>
                <div>(215) 893-1600</div>
                <br />
                <div className="reservations">
                  <div>
                    <b>to reserve rooms</b>
                  </div>
                  <div className="small">
                    call and request the room rate for
                  </div>
                  <div>cucunato-raletz wedding room block</div>
                  <div className="small">
                    or reserve online by clicking button below
                  </div>
                  <div className="small text-muted">
                    <i>must reserve before october 11, 2022</i>
                  </div>
                </div>
                <br />
                <div>
                  <button type="button" class="btn btn-black">
                    coming soon
                  </button>
                </div>
                <br />
                <img
                  src={doubletree}
                  className="doubletree-hotel"
                  alt="doubletree-hotel"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default HotelRoom;
