import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({
  hasAccess,
  whenTrue: WhenTrue,
  whenFalse: WhenFalse,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(renderProps) =>
      hasAccess ? <WhenTrue {...renderProps} /> : <WhenFalse {...renderProps} />
    }
  />
);

export default PrivateRoute;
