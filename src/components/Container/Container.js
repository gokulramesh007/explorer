import React from "react";
import PropTypes from "prop-types";
import "./Container.css";

const Container = props => {
  return (
    <div className="explorer-container-wrapper">
      {props.text}
    </div>
  );
};

Container.defaultProps = {
  text: ""
};

Container.propTypes = {
  text: PropTypes.string
};

export default Container;
