import React from 'react';
import Input from './Input';

class MoneyInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cash: 0,
      bonds: 0,
      gold: 0,
      options: 0,
      stocks: 0
    };

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
    return Object.keys(this.state).map( (category, idx) => (
      <Input
        key={ category }
        name={ category }
        value={ this.state[category] }
        onChange={ this.handleChange } />
    ));
  }

  render() {
    return (
      <div className="MoneyInput">
        <h3>My portolio:</h3>
        { this.renderInputs() }
        <button
          onClick={ this.handleSubmit }>
          Calculate
        </button>
      </div>
    );
  }
}

export default MoneyInput;
