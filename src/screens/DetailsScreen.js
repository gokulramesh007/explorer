import React from "react";
import { Header, Loader, LocationList } from "../components";
import { Strings, Images } from "../constants";
import {
  fetchSpecificLocation,
  fetchSimilarLocations,
  fetchWeather
} from "../services";
import "./DetailsScreen.css";
export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      locations: [],
      similarLocations: [],
      temperature: null
    };
  }

  /**** LIFE CYCLE LISTENERS START ****/

  componentDidMount = () => {
    let place = this.props.match.params.place
      ? this.props.match.params.place
      : Strings.APPLICATION.DETAILS_SCREEN.DEFAULT_LOCATION;
    this._fetchLocation(place);
    this._fetchSimilarLocations(place);
    this._fetchWeather(place);
    this.setState({
      isLoading: false
    });
  };

  componentWillReceiveProps = props => {
    this.setState({
      isLoading: true
    });
    let place = props.match.params.place
      ? props.match.params.place
      : Strings.APPLICATION.DETAILS_SCREEN.DEFAULT_LOCATION;
    this._fetchLocation(place);
    this._fetchSimilarLocations(place);
    this._fetchWeather(place);
    this.setState({
      isLoading: false
    });
  };

  /**** LIFE CYCLE LISTENERS END ****/

  /**** SERVICE CALLS START ****/

  _fetchLocation = place => {
    fetchSpecificLocation(place)
      .then(response => {
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

  _fetchSimilarLocations = place => {
    fetchSimilarLocations(place)
      .then(response => {
        if (response && response.status === 200) {
          this.setState({
            similarLocations: response.data
          });
        } else {
          console.log(response.statusText);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  _fetchWeather = place => {
    fetchWeather(place)
      .then(response => {
        if (response && response.status === 200) {
          if (response.data && response.data.main && response.data.main.temp) {
            let weather =
              parseInt(response.data.main.temp) -
              Strings.APPLICATION.KELVIN_TO_CELSIUS_DEFAULT;
            this.setState({
              temperature: weather.toFixed(1)
            });
          } else {
            this.setState({
              temperature: null
            });
          }
        } else {
          this.setState({
            temperature: null
          });
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**** SERVICE CALLS END ****/

  /**** HELPER FUNCTIONS START ****/

  _fetchDescription = () => {
    let description = [];
    if (
      this.state.locations &&
      this.state.locations[0] &&
      this.state.locations[0].description
    ) {
      for (let i = 0; i < 3; i++) {
        description.push(
          <div className="description-section" key={i}>
            {this.state.locations[0].description}
            {this.state.locations[0].description}
          </div>
        );
      }
    } else {
      description.push(
        <div className="description-section center" key={0}>
          {Strings.APPLICATION.DETAILS_SCREEN.NO_DESCRIPTION}
        </div>
      );
    }
    return description;
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    const { isLoading } = this.state;
    const location =
      this.state.locations &&
      this.state.locations[0] &&
      this.state.locations[0].location
        ? this.state.locations[0].location.toUpperCase()
        : "";
    const locationTitle = location.toLowerCase();
    const title =
      this.state.locations &&
      this.state.locations[0] &&
      this.state.locations[0].title
        ? this.state.locations[0].title
        : "";
    const imagePath = Images.LOCATIONS[location] || "";
    return (
      <div>
        <Header theme={Strings.APPLICATION.HEADER.THEMES.DARK} />
        <div className="location-details-wrapper">
          <div className="location-wrapper">
            <div className="location-details">
              <img src={imagePath} alt={location} />
              <div>
                {title}
              </div>
            </div>
          </div>
          <div className="separator" />
          <div className="weather-details-wrapper">
            <span className="location-title">
              {locationTitle}
            </span>
            {this.state.temperature
              ? <span>
                  {this.state.temperature}&#8451;
                </span>
              : null}
          </div>
          <div className="separator" />
          <div className="location-description">
            {this._fetchDescription()}
          </div>
          <div className="similar-locations">
            {Strings.APPLICATION.DETAILS_SCREEN.SIMILAR_LOCATIONS}
          </div>
          <LocationList data={this.state.similarLocations} />
        </div>
        {isLoading ? <Loader /> : null}
      </div>
    );
  }
}
