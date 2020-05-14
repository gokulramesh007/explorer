import React from "react";
import { Images, Strings } from "../../constants";
import { Button } from "../../components";
import PropTypes from "prop-types";
import "./LocationTile.css";

const LocationTile = props => {
  let { id, title, location, description } = props.data;
  location = (location && location.toUpperCase()) || "";
  const imagePath = Images.LOCATIONS[location] || "";
  return (
    <div className="location-tile-wrapper">
      <img src={imagePath} alt={location} />
      <div className="location-tile-title">
        {title}
      </div>
      <div className="location-tile-name">
        {location}
      </div>
      <div className="location-tile-description">
        {description}
      </div>
      <Button
        text={Strings.APPLICATION.HOME_SCREEN.BUTTON.LOCATION_LIST.READ_MORE}
        params={id}
        theme={Strings.APPLICATION.HOME_SCREEN.THEMES.DARK}
      />
    </div>
  );
};

LocationTile.defaultProps = {
  data: {}
};

LocationTile.propTypes = {
  data: PropTypes.object.isRequired
};

export default LocationTile;
