import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./home/pages/Home";
import Places from "./places/pages/Places";
import * as Actions from "./redux/actions";

function App({ fetchMe }) {
  useEffect(() => {
    const checkMe = async () => {
      fetchMe();
    };
    checkMe();
  }, [fetchMe]);

  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/places" exact component={Places}></Route>
    </Router>
  );
}

export default connect(null, Actions)(App);
