import React from "react";
import { Strings } from "../../constants";
import { FormInput } from "../../components";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      homeTown: "",
      whereTo: ""
    };
  }

  _handleSubmit = event => {
    event.preventDefault();
    console.log(
      "Name : " +
        this.state.name +
        "\nHome Town : " +
        this.state.homeTown +
        "\nWhere to : " +
        this.state.whereTo
    );
    this.setState({
      name: "",
      homeTown: "",
      whereTo: ""
    });
  };

  render() {
    return (
      <form className="form-wrapper" onSubmit={this._handleSubmit}>
        <FormInput
          labelText={Strings.APPLICATION.HOME_SCREEN.FORM.CONTACT_US.NAME}
          name="name"
          onChange={name => {
            this.setState({ name });
          }}
          value={this.state.name}
          required={true}
        />
        <FormInput
          labelText={Strings.APPLICATION.HOME_SCREEN.FORM.CONTACT_US.HOME_TOWN}
          name="homeTown"
          onChange={homeTown => {
            this.setState({ homeTown });
          }}
          value={this.state.homeTown}
          required={true}
        />
        <FormInput
          labelText={
            Strings.APPLICATION.HOME_SCREEN.FORM.CONTACT_US.WHERE_LABEL
          }
          name="whereTo"
          onChange={whereTo => {
            this.setState({ whereTo });
          }}
          value={this.state.whereTo}
          required={true}
        />
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
