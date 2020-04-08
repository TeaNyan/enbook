import React, { useState } from "react";

import { Column } from "../../shared/layouts/Column";
import { Post, PostImg, Description, Blog, ReadMore } from "./style";

const apiUrl = "https://enbook-api.herokuapp.com/";

const PlaceItem = ({ place }) => {
  const [isBlogShown, setIsBlogShown] = useState(false);

  const handleIsBlogShown = () => {
    const nextIsBlogShown = !isBlogShown;

    setIsBlogShown(nextIsBlogShown);
  };

  return (
    <Column>
      <Post>
        <PostImg src={apiUrl + place.image}></PostImg>
        <h3
          style={{
            color: "#24315b",
          }}>
          {place.title}
        </h3>
        <Description>{place.description}</Description>
        <ReadMore onClick={handleIsBlogShown}>
          {!isBlogShown ? "Read more..." : "Read less..."}
        </ReadMore>
        {isBlogShown && <Blog>{place.blog}</Blog>}
      </Post>
    </Column>
  );
};

export default PlaceItem;
