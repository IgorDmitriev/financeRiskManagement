import React from 'react';
import Input from './Input';
import _ from 'lodash';

import './MoneyInput.css';

class MoneyInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...this.props.moneyInCategories};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    const target = e.target;
    const name = target.name;
    let value = target.value;

    if (value.length === 0 || parseFloat(value) < 0) value = 0;

    this.setState({
      [name]: parseFloat(value)
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.calculateTransactions(this.state);
  }

  renderInputs() {
    const inputs = Object.keys(this.state).map( (category, idx) => (
      <Input
        key={ category }
        name={ category }
        value={ this.state[category] }
        onChange={ this.handleChange } />
    ));

    return (
      <div className="inputs">
        { inputs }
      </div>
    );
  }

  render() {
    return (
      <div className="MoneyInput">
        <h3>My portolio:</h3>
        { this.renderInputs() }
        <div className="buttons">
          <button
            onClick={ this.props.goBack }>
            Change Risk Level
          </button>
          <button
            onClick={ this.handleSubmit }>
            Calculate
          </button>
        </div>
      </div>
    );
  }
}

export default MoneyInput;
