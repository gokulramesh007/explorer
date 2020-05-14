import React from "react";
import PropTypes from "prop-types";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
    this._handleInputChange = this._handleInputChange.bind(this);
  }

  /**** LIFE CYCLE LISTENERS START ****/

  componentWillReceiveProps = props => {
    this.setState({
      value: props.value
    });
  };

  /**** LIFE CYCLE LISTENERS END ****/

  /**** HELPER FUNCTIONS START ****/

  _handleInputChange = event => {
    const target = event.target;
    this.props.onChange(target.value);
    this.setState({
      value: target.value
    });
  };

  /**** HELPER FUNCTIONS END ****/

  render() {
    return (
      <div className="form-element">
        <label htmlFor={this.props.name}>
          {this.props.labelText}
        </label>
        <input
          type="text"
          name={this.props.name}
          value={this.state.value}
          onChange={this._handleInputChange}
          required={this.props.required}
        />
      </div>
    );
  }
}

FormInput.defaultProps = {
  name: "",
  required: false,
  labelText: "",
  value: ""
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormInput;
