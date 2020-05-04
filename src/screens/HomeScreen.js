import React from "react";
import { Header } from "../components/Header";
import { Strings } from "../constants";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <Header theme={Strings.APPLICATION.HEADER.THEMES.LIGHT} />
        <div>Home Screen</div>
      </div>
    );
  }
}
