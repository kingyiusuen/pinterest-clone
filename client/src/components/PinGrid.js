import React from "react";

import Masonry from "react-masonry-css";

import "./PinGrid.css";
import Pin from "./Pin";

const PinGrid = ({ userId, photoUrls, savedPins }) => {
  const breakpoints = { default: 4 };
  const baseWidth = 503;
  const increment = 252;
  for (let i = 0; i < 30; i++) {
    breakpoints[baseWidth + increment * i] = i + 1;
  }

  return (
    <div>
      {photoUrls && (
        <Masonry breakpointCols={breakpoints} className="masonry-grid">
          {photoUrls.map((photoUrl, index) => (
            <Pin
              key={index}
              userId={userId}
              photoUrl={photoUrl}
              isSaved={savedPins.includes(photoUrl)}
            />
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default PinGrid;
