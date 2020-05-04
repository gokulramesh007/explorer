import React from "react";
import { Strings } from "../../constants";
import { SearchBar } from "../SearchBar";
import { FetchAllLocations } from "../../services/LocationService";
import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        if (response && response.status === 200) {
          this.setState({
            locations: response.data
          });
        } else {
          console.error(response.statusText);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  /**** SERVICE CALLS END ****/

  render() {
    const theme =
      this.props.theme === Strings.APPLICATION.HEADER.THEMES.LIGHT
        ? Strings.APPLICATION.HEADER.THEMES.LIGHT
        : Strings.APPLICATION.HEADER.THEMES.DARK;
    return (
      <div className={`header-container ${theme}`}>
        <h2 className={`title ${theme}`}>
          {Strings.APPLICATION.TITLE}
        </h2>
        <SearchBar theme={theme} data={this.state.locations} />
      </div>
    );
  }
}
