import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const COLORS = {
  cash: '#2D7DBC',
  gold: '#FFD034',
  bonds: '#DB3A34',
  options: '#4A4A4A',
  stocks: '#037365'
};

class RiskLevelChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.categories.filter( el => el.value > 0);

    return (
      <div className="RiskLevelChart">
        <PieChart width={500} height={320} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={100}
            fill="#8884d8"
            stroke="transparent"
            paddingAngle={5}
            label={ el => el.percent * 100 + '% ' + el.name}
            labelLine={false}
            isAnimationActive={ false }
          >
          	{
            	data.map((entry, index) => <Cell key={index} fill={COLORS[entry.name]}/>)
            }
          </Pie>
        </PieChart>
      </div>
    );
  }
}

export default RiskLevelChart;
