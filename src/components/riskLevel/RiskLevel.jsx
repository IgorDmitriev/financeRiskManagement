import React from 'react';
import RiskLevelInput from './RiskLevelInput';
import RiskLevelChart from './RiskLevelChart';

import './RiskLevel.css';

class RiskLevel extends React.Component {
  constructor(props) {
    super(props);

    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.props.router.push('/2');
  }


  render() {
    return (
      <div className="RiskLevel">
        <RiskLevelInput
          riskLevel={ this.props.riskLevel }
          setRiskLevel={ this.props.setRiskLevel} />
        <RiskLevelChart
          categories={ this.props.categoriesDistribution } />
        <button
          onClick={ this.nextStep }>
          Continue
        </button>
      </div>
    );
  }
}

export default RiskLevel;
