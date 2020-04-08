import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import SpinScreen from "./shared/components/SpinScreen";

import PrivateRoute from "./shared/components/PrivateRoute";
import Home from "./home/pages/Home";
import Places from "./places/pages/Places";
import * as Actions from "./redux/actions";
import { selectMeRequest, selectMe } from "./redux/selectors";

const RedirectToHome = () => <Redirect to="/" />;

function App({ fetchMe, me, request }) {
  useEffect(() => {
    const checkMe = async () => {
      if (!me) fetchMe();
    };
    checkMe();
  }, [fetchMe, me]);

  if (request.isLoading) {
    return <SpinScreen />;
  }

  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <PrivateRoute
        exact
        path="/places"
        hasAccess={!!me}
        whenTrue={Places}
        whenFalse={RedirectToHome}></PrivateRoute>
    </Switch>
  );
}

export default connect((state) => {
  return { me: selectMe(state), request: selectMeRequest(state) };
}, Actions)(App);
