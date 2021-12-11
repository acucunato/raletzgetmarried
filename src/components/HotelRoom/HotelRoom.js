import React from "react";
import Nav from "../Nav/Nav";
import "./HotelRoom.css";

function HotelRoom() {
  return (
    <div className="hotel-room-block">
      <div className="row">
        <Nav />
        <div className="col-md-3 pt-3 p-1 text-center wow fadeIn delay-2s">
          <h1 className="hotel-title">we'd love for you to stay</h1>
          <div className="cambria-hotel-container justify-content-center">
            <img
              src="https://i.ibb.co/Sd8JYj0/cambria.jpg"
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
                call the hotel, press 1 and request the room rate for
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
              <a
                href="https://www.choicehotels.com/reservations/groups/RS60W2"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-black">
                  book at cambria
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 pt-5 p-1 text-center wow fadeIn delay-2s">
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
              <div>cucunato-raletz wedding room block</div>
              <div className="small">
                reserve online by clicking button below
              </div>
              <div className="small text-muted">
                <i>must reserve before october 11, 2022</i>
              </div>
            </div>
            <br />
            <div>
              <a
                href="https://book.passkey.com/e/50271035"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" class="btn btn-black">
                  book at hilton
                </button>
              </a>
            </div>
            <br />
            <img
              src="https://i.ibb.co/HCrV5nr/doubletree.jpg"
              className="doubletree-hotel"
              alt="doubletree-hotel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelRoom;
