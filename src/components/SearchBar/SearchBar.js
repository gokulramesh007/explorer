import React from "react";
import "./SearchBar.css";
import { withRouter } from "react-router-dom";
import { Strings } from "../../constants";

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

  renderSearchResults = () => {
    let searchResults = [];
    let filteredSuggestions = [];
    filteredSuggestions = this.filterResults(
      this.state.suggestions,
      this.state.searchkey
    );
    filteredSuggestions.forEach(item => {
      searchResults.push(
        <div
          className="suggestion-item-wrapper"
          key={item.id}
          onClick={this.handleSearchChange}
        >
          {item.id}
        </div>
      );
    });
    return searchResults;
  };

  handleSearchChange = event => {
    let searchKey = event.target.innerHTML;
    this.setState({
      searchkey: ""
    });
    this.props.history.push(Strings.APPLICATION.DETAILS_PAGE_ROUTE + searchKey);
  };

  handleInputChange = event => {
    this.setState({
      searchkey: event.target.value
    });
  };

  filterResults = (suggestions, searchkey) => {
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
          onChange={this.handleInputChange}
        />
        <div
          className={`explorer__suggestions-container ${searchResultsContainer}`}
        >
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
