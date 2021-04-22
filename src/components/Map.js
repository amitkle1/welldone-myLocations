import React from "react";
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl";
import { useHistory } from "react-router-dom";

const navControlStyle = {
  right: 10,
  top: 10,
};

function Map({ viewport, setViewport, setCoordinates }) {
  const history = useHistory();
  const getLocation = (e) => {
    setCoordinates(e.lngLat[1] + "," + e.lngLat[0]);
    history.push("/add-item");
  };
  return (
    <>
      {" "}
      <ReactMapGL
        onClick={(e) => getLocation(e)}
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
            alt="map"
          />
        </Marker>{" "}
        <NavigationControl style={navControlStyle} />
      </ReactMapGL>
    </>
  );
}

export default Map;
