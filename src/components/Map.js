import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";

function Map({ viewport, setViewport }) {
  return (
    <>
      {" "}
      <ReactMapGL
        mapboxApiAccessToken={
          "pk.eyJ1Ijoiemhhb3YxMjMiLCJhIjoiY2tucmhkdTlvMG9wdjJubzFvMXV5OXd0cCJ9.R1G-Op009BGPKHtm-jQDZQ"
        }
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </>
  );
}

export default Map;
