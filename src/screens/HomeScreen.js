import React from "react";
import { Header } from "../components/Header";
import { Strings } from "../constants";
import { Banner } from "../components/Banner";
import "./HomeScreen.css";
export default class HomeScreen extends React.Component {
  render() {
    const bannerText = ["Learn", "Why Travelling is Important?"];
    return (
      <div>
        <Header theme={Strings.APPLICATION.HEADER.THEMES.LIGHT} />
        <Banner
          text={bannerText}
          theme={Strings.APPLICATION.HOME_SCREEN.BANNER.THEMES.DARK}
        />
        <div className="explore-block">
          {Strings.APPLICATION.HOME_SCREEN.EXPLORE_TEXT}
        </div>
      </div>
    );
  }
}
