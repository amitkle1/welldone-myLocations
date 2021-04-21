import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

function Map({ viewport, setViewport }) {
  return (
    <>
      {" "}
      <ReactMapGL
        style={{ margin: "0 auto" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={
          "pk.eyJ1Ijoiemhhb3YxMjMiLCJhIjoiY2tucmhkdTlvMG9wdjJubzFvMXV5OXd0cCJ9.R1G-Op009BGPKHtm-jQDZQ"
        }
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
          <img
            src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
            width={50}
            height={50}
          />
        </Marker>
      </ReactMapGL>
    </>
  );
}

export default Map;
