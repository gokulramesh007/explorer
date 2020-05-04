import React from "react";
import { Header } from "../components/Header";
import { Strings } from "../constants";
export default class DetailsScreen extends React.Component {
  render() {
    return (
      <div>
        <Header theme={Strings.APPLICATION.HEADER.THEMES.DARK} />
        <div>Details Screen</div>
      </div>
    );
  }
}
