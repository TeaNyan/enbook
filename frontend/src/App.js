import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home/pages/Home';
import Places from './places/pages/Places';
import Header from './shared/components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home}></Route>
      <Route path="/places" exact component={Places}></Route>
    </Router>
  );
}

export default App;
