import React from "react";
import "./HomeScreen.css";
import { Header, Banner, LocationList, Loader, Form } from "../components";
import { Strings } from "../constants";
import { fetchAllLocations } from "../services/LocationService";
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      locations: []
    };
    this._fetchLocations();
  }

  /**** LIFE CYCLE LISTENERS START ****/

  componentDidMount = () => {};

  /**** LIFE CYCLE LISTENERS END ****/

  /**** SERVICE CALLS START ****/

  _fetchLocations = () => {
    fetchAllLocations()
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
        <Header />
        <Banner text={bannerText} />
        <div className="location-tile-container">
          <div className="explore-block">
            {Strings.APPLICATION.HOME_SCREEN.EXPLORE_TEXT}
          </div>

          <LocationList data={this.state.locations} />

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
