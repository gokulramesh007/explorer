import React from "react";
import { LocationTile } from "../Cards";
import "./List.css";

const List = props => {
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
  const columns = props.column ? props.column : "three";

  return (
    <div className={`list-wrapper ${columns}`}>
      {_renderLocationTiles()}
    </div>
  );
};

export default List;
