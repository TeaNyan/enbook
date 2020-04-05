import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Spinner } from "@blueprintjs/core";

import PrivateRoute from "./shared/components/PrivateRoute";
import Home from "./home/pages/Home";
import Places from "./places/pages/Places";
import * as Actions from "./redux/actions";
import { selectMeRequest } from "./redux/selectors";

const RedirectToHome = () => <Redirect to="/" />;

function App({ fetchMe, me, request }) {
  useEffect(() => {
    const checkMe = async () => {
      if (!me) fetchMe();
    };
    checkMe();
  }, [fetchMe, me]);

  if (request.isLoading) {
    return <Spinner></Spinner>;
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
  return { me: state.me.data, request: selectMeRequest(state) };
}, Actions)(App);
