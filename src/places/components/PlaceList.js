import React from "react";

import PlaceItem from "./PlaceItem";
import { Spinner } from "@blueprintjs/core";

const PlaceList = ({ places, request }) => {
  if (request.isLoading) return <Spinner />;

  return (
    <React.Fragment>
      {places &&
        places.map((x) => {
          return <PlaceItem key={x.id} place={x}></PlaceItem>;
        })}
    </React.Fragment>
  );
};

export default PlaceList;
