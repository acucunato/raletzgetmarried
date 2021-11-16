import React from "react";
import Footer from "../components/Footer/Footer";
import HPContainer from "../components/HPContainer/HPContainer";
import Monogram from "../components/Monogram/Monogram";

import WeddingDetails from "../components/WeddingDetails/WeddingDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Photos from "../components/Photos/Photos";
import Registry from "../components/Registry/Registry";
import BridalParty from "../components/BridalParty/BridalParty";
import HotelRoom from "../components/HotelRoom/HotelRoom";

function HomePage() {
  return (
    <Router>
      <Monogram />
      <Switch>
        <Route exact path={["/"]}>
          <HPContainer />
        </Route>
        <Route exact path={["/details"]}>
          <WeddingDetails />
        </Route>
        <Route exact path={["/photos"]}>
          <Photos />
        </Route>
        <Route exact path={["/wedding-party"]}>
          <BridalParty />
        </Route>
        <Route exact path={["/hotel-room-blocks"]}>
          <HotelRoom />
        </Route>
        <Route exact path={["/registry"]}>
          <Registry />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default HomePage;
