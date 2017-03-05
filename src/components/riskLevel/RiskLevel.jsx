import React from 'react';
import RiskLevelInput from './RiskLevelInput';
import RiskLevelChart from './RiskLevelChart';

class RiskLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RiskLevelInput
          riskLevel={ this.props.riskLevel }
          setRiskLevel={ this.props.setRiskLevel}
        />
        <RiskLevelChart
          categories={ this.props.categoriesDistribution }
        />
      </div>
    );
  }
}

export default RiskLevel;
