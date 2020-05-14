import React from "react";
import PropTypes from "prop-types";
import "./Banner.css";

const Banner = props => {
  return (
    <div className={`banner ${props.theme}`}>
      <div className={`banner-text ${props.theme}`}>
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
