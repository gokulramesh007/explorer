import React from "react";
import { Strings } from "../../constants";
import { SearchBar } from "../../components";
import { fetchAllLocations } from "../../services/LocationService";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
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
    fetchAllLocations()
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

  /**** SERVICE CALLS END ****/

  /**** HELPER FUNCTIONS START ****/

  _redirectUser = () => {
    this.props.history.push("/");
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    const theme = this.props.theme;
    return (
      <div className={`header-container ${theme}`}>
        <div className={`title ${theme}`} onClick={this._redirectUser}>
          {Strings.APPLICATION.TITLE}
        </div>
        <SearchBar data={this.state.locations} />
      </div>
    );
  }
}

Header.defaultProps = {
  theme: "light"
};

Header.propTypes = {
  theme: PropTypes.string
};

export default withRouter(Header);
