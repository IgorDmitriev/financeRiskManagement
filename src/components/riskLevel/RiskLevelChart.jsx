import React from 'react';

class RiskLevelChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.categories);
    return (
      <div className="RiskLevelChart">
        chart
      </div>
    );
  }
}

export default RiskLevelChart;
