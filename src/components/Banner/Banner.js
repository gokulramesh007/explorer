import React from "react";
import PropTypes from "prop-types";
import "./Banner.css";

const Banner = props => {
  const theme = props.theme;
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

Banner.defaultProps = {
  text: ["Explorer"],
  theme: ""
};

Banner.propTypes = {
  text: PropTypes.array,
  theme: PropTypes.string
};

export default Banner;
