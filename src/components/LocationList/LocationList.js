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
  return (
    <div className={`list-wrapper ${props.column}`}>
      {_renderLocationTiles()}
    </div>
  );
};

LocationList.defaultProps = {
  data: [],
  column: "three"
};

LocationList.propTypes = {
  data: PropTypes.array,
  column: PropTypes.string
};

export default LocationList;
