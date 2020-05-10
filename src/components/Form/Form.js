import React from "react";
import { Strings } from "../../constants";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      homeTown: "",
      whereTo: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(
      "Name : " +
        this.state.name +
        "\nHome Town : " +
        this.state.homeTown +
        "\nWhere to : " +
        this.state.whereTo
    );
  };

  render() {
    return (
      <form className="form-wrapper" onSubmit={this.handleSubmit}>
        <div className="form-element">
          <label htmlFor="name">
            {Strings.APPLICATION.HOME_SCREEN.FORM.CONTACT_US.NAME}
          </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="homeTown">
            {Strings.APPLICATION.HOME_SCREEN.FORM.CONTACT_US.HOME_TOWN}
          </label>
          <input
            type="text"
            name="homeTown"
            value={this.state.homeTown}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-element">
          <label htmlFor="whereTo">
            {Strings.APPLICATION.HOME_SCREEN.FORM.CONTACT_US.WHERE_LABEL}
          </label>
          <input
            type="text"
            name="whereTo"
            value={this.state.whereTo}
            onChange={this.handleInputChange}
          />
        </div>
        <input
          type="submit"
          value={
            Strings.APPLICATION.HOME_SCREEN.BUTTON.CONTACT_US_FORM
              .SUBMIT_INTEREST
          }
          className="submit-interest-btn"
        />
      </form>
    );
  }
}

export default Form;
