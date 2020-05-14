import React from "react";
import { Strings } from "../../constants";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import "./Button.css";

const Button = props => {
  const buttonText = props.text;
  const theme = props.theme;

  const _buttonClick = () => {
    props.history.push(Strings.APPLICATION.DETAILS_PAGE_ROUTE + props.params);
  };
  return (
    <button className={`button ${theme}`} onClick={_buttonClick}>
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  text: "Read More",
  theme: "dark"
};

Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string
};

export default withRouter(Button);
