import React from 'react';
import './RiskLevelInput.css';

class RiskLevelInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;

    this.props.setRiskLevel(value);
  }

  render() {
    return (
      <div className="RiskLevelInput">
        <h3>My Risk Level:</h3>
        <div className="risk-level-value">
          { this.props.riskLevel }
        </div>
        <div className="risk-level-slider">
          <span>1</span>
          <input
            type="range"
            value={ this.props.riskLevel }
            min={ 1 }
            max={ 10 }
            step={ 1 }
            onChange={ this.handleChange }
          />
          <span>10</span>
        </div>
      </div>
    );
  }
}

export default RiskLevelInput;
