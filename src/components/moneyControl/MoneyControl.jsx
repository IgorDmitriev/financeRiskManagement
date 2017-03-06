import React from 'react';
import MoneyInput from './MoneyInput';
import MoneyRecommendations from './MoneyRecommendations';

import './MoneyControl.css';

class MoneyControl extends React.Component {
  render() {
    const {
      moneyInCategories,
      transactions,
      recommendedDistribution,
      calculateTransactions } = this.props;
    return (
      <div className="MoneyControl">
        <MoneyInput
          moneyInCategories={ moneyInCategories }
          calculateTransactions={ calculateTransactions }
          goBack={ () => this.props.router.push('/') }
        />
        <MoneyRecommendations
          transactions={ transactions }
          recommendedDistribution={ recommendedDistribution }
        />
      </div>
    );
  }
}

export default MoneyControl;
