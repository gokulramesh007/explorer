import React from "react";
import { LocationTile } from "../../components";
import PropTypes from "prop-types";
import "./LocationList.css";

const LocationList = props => {
  const _renderLocationTiles = () => {
    let locationList = [];
    props.data.forEach(item => {
      locationList.push(
        <div className="tiles" key={item.id}>
          <LocationTile data={item} />
        </div>
      );
    });
    return locationList;
  };
  const columns = props.column || "three";

  return (
    <div className={`list-wrapper ${columns}`}>
      {_renderLocationTiles()}
    </div>
  );
};

LocationList.defaultProps = {
  data: []
};

LocationList.propTypes = {
  data: PropTypes.array
};

export default LocationList;
