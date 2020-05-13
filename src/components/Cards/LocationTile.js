import React from "react";
import { Images, Strings } from "../../constants";
import { Button } from "../Button";
import "./LocationTile.scss";

const LocationTile = props => {
  const location = props.data.location.toUpperCase();
  const imagePath = Images.LOCATIONS[location]
    ? Images.LOCATIONS[location]
    : "";
  return (
    <div className="location-tile-wrapper">
      <img src={imagePath} alt={props.data.location} />
      <div className="location-tile-title">
        {props.data.title}
      </div>
      <div className="location-tile-name">
        {props.data.location}
      </div>
      <div className="location-tile-description">
        {props.data.description}
      </div>
      <Button
        text={Strings.APPLICATION.HOME_SCREEN.BUTTON.LOCATION_LIST.READ_MORE}
        params={props.data.id}
        theme={Strings.APPLICATION.HOME_SCREEN.THEMES.DARK}
      />
    </div>
  );
};

export default LocationTile;
