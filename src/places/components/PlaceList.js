import React from "react";

import PlaceItem from "./PlaceItem";

const PlaceList = ({ places }) => {
  return (
    <React.Fragment>
      {places &&
        places.map((x) => {
          console.log(x);
          console.log(x.title, x.id);
          return <PlaceItem key={x.id} place={x}></PlaceItem>;
        })}
    </React.Fragment>
  );
};

export default PlaceList;
