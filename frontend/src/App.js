import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./home/pages/Home";
import Places from "./places/pages/Places";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/places" exact component={Places}></Route>
    </Router>
  );
}

export default App;
