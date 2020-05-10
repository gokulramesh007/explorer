import React from "react";
import {Strings} from "../../constants";
import "./Banner.css";

const Banner = props => {
    const theme = props.theme === Strings.APPLICATION.HOME_SCREEN.BANNER.THEMES.LIGHT ? props.theme : '';
  return (
    <div className={`banner ${theme}`}>
      <div className={`banner-text ${theme}`}>
        {props.text.map(function(item, key) {
          return (
            <div className="banner-text-content" key={key}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
