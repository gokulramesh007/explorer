import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Strings } from "../../constants";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: props.data
    };
  }

  /**** LIFE CYCLE LISTENERS START ****/

  componentWillReceiveProps = props => {
    this.setState({
      suggestions: props.data
    });
  };

  /**** LIFE CYCLE LISTENERS END ****/

  /**** HELPER FUNCTIONS START ****/

  _renderSearchResults = () => {
    let searchResults = [];
    let filteredSuggestions = [];
    filteredSuggestions = this._filterResults(
      this.state.suggestions,
      this.state.searchkey
    );
    if (filteredSuggestions.length > 0) {
      filteredSuggestions.forEach(item => {
        searchResults.push(
          <div
            className="suggestion-item-wrapper"
            key={item.id}
            onClick={this._handleSearchChange}
          >
            {item.id}
          </div>
        );
      });
    } else if (this.state.searchkey) {
      searchResults.push(
        <div className="suggestion-item-wrapper" key={0}>
          {Strings.APPLICATION.HEADER.SEARCH.NO_SEARCH_RESULTS}
        </div>
      );
    }
    return searchResults;
  };

  _handleSearchChange = event => {
    let searchKey = event.target.innerHTML;
    this.setState({
      searchkey: ""
    });
    this.props.history.push(Strings.APPLICATION.DETAILS_PAGE_ROUTE + searchKey);
  };

  _handleInputChange = event => {
    this.setState({
      searchkey: event.target.value
    });
  };

  _filterResults = (suggestions, searchkey) => {
    let filteredSuggestions = [];
    filteredSuggestions = suggestions.filter(function(suggestion) {
      return suggestion.location.toLowerCase().includes(searchkey);
    });
    return filteredSuggestions;
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    const searchResultsContainer = this.state.searchkey !== "" ? "show" : "";
    return (
      <div>
        <input
          type="text"
          name="explorer-search-section"
          className="explorer-search-section"
          value={this.state.searchkey || ""}
          placeholder="Search"
          onChange={this._handleInputChange}
        />
        <div
          className={`explorer__suggestions-container ${searchResultsContainer}`}
        >
          {this._renderSearchResults()}
        </div>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  data: []
};

SearchBar.propTypes = {
  data: PropTypes.array.isRequired
};

export default withRouter(SearchBar);
