import React from "react";
import Footer from "../components/Footer/Footer";
import HPContainer from "../components/HPContainer/HPContainer";
import Monogram from "../components/Monogram/Monogram";

import WeddingDetails from "../components/WeddingDetails/WeddingDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Photos from "../components/Photos/Photos";

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
      </Switch>
      <Footer />
    </Router>
  );
}

export default HomePage;
