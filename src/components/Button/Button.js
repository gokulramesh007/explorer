import React from "react";
import { Strings } from "../../constants";
import "./Button.scss";
import { withRouter } from "react-router-dom";

const Button = props => {
  const buttonText = props.text
    ? props.text
    : Strings.APPLICATION.BUTTON_DEFAULT_TEXT;
  const theme = props.theme
    ? props.theme
    : Strings.APPLICATION.HOME_SCREEN.THEMES.DARK;

  const buttonClick = () => {
    props.history.push(Strings.APPLICATION.DETAILS_PAGE_ROUTE + props.params);
  };
  return (
    <button className={`button ${theme}`} onClick={buttonClick}>
      {buttonText}
    </button>
  );
};

export default withRouter(Button);
