import React from "react";
import { Strings } from "../../constants";
import { SearchBar } from "../SearchBar";
import { FetchAllLocations } from "../../services/LocationService";
import { withRouter } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
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

  /**** HELPER FUNCTIONS START ****/

  redirectUser = () => {
    this.props.history.push("/");
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    const theme =
      this.props.theme === Strings.APPLICATION.HEADER.THEMES.LIGHT
        ? Strings.APPLICATION.HEADER.THEMES.LIGHT
        : Strings.APPLICATION.HEADER.THEMES.DARK;
    return (
      <div className={`header-container ${theme}`}>
        <div className={`title ${theme}`} onClick={this.redirectUser}>
          {Strings.APPLICATION.TITLE}
        </div>
        <SearchBar theme={theme} data={this.state.locations} />
      </div>
    );
  }
}

export default withRouter(Header);
