import React from "react";
import "./HomeScreen.css";
import { Header } from "../components/Header";
import { Strings } from "../constants";
import { Banner } from "../components/Banner";
import { List } from "../components/List";
import { Loader } from "../components/Loader";
import { Form } from "../components/Form";
import { FetchAllLocations } from "../services/LocationService";
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      locations: []
    };
  }

  /**** LIFE CYCLE LISTENERS START ****/

  componentDidMount = () => {
    this._fetchLanguages();
  };

  /**** LIFE CYCLE LISTENERS END ****/

  /**** SERVICE CALLS START ****/

  _fetchLanguages = () => {
    FetchAllLocations()
      .then(response => {
        this.setState({
          isLoading: false
        });
        if (response && response.status === 200) {
          this.setState({
            locations: response.data
          });
        } else {
          console.log(response.statusText);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**** SERVICE CALLS END ****/

  render() {
    const { isLoading } = this.state;
    const bannerText = ["Learn", "Why Travelling is Important?"];
    return (
      <div>
        <Header theme={Strings.APPLICATION.HEADER.THEMES.LIGHT} />
        <Banner
          text={bannerText}
          theme={Strings.APPLICATION.HOME_SCREEN.BANNER.THEMES.DARK}
        />
        <div className="location-tile-container">
          <div className="explore-block">
            {Strings.APPLICATION.HOME_SCREEN.EXPLORE_TEXT}
          </div>

          <List data={this.state.locations} />

          <div className="explore-block">
            {Strings.APPLICATION.HOME_SCREEN.LIKE_TO_TRAVEL_TEXT}
          </div>
          <div className="contact-us-form-wrapper">
            <Form />
          </div>
        </div>
        {isLoading ? <Loader /> : null}
      </div>
    );
  }
}
