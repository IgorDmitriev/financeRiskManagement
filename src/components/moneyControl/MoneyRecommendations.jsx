import React from 'react';
import Transaction from './Transaction';

import './MoneyRecommendations.css';

class MoneyRecommendations extends React.Component {
  constructor(props) {
    super(props);
  }

  renderWithdrawals() {
    const { transactions: { withdrawals }} = this.props;
    if (withdrawals.length === 0) return null;

    const transactions = withdrawals.map( (transaction, idx) => (
      <Transaction
        key={ transaction.category }
        category={ transaction.category }
        amount={ transaction.amount } />
    ));

    return (
      <ul className="withdrawals">
        <h4>Withdrawals:</h4>
        { transactions }
      </ul>
    );
  }

  renderDeposits() {
    const { transactions: { deposits }} = this.props;
    if (deposits.length === 0) return null;

    const transactions = deposits.map( (transaction, idx) => (
      <Transaction
        key={ transaction.category }
        category={ transaction.category }
        amount={ transaction.amount } />
    ));

    return (
      <ul className="deposits">
        <h4>Deposits:</h4>
        { transactions }
      </ul>
    );
  }

  renderRecommended() {
    const { recommendedDistribution } = this.props;
    const categories =
      Object.keys(recommendedDistribution).map( category => (
        <div className={ category }>
          <div className="title">{ category }</div>
          <div className="value">{ recommendedDistribution[category] }</div>
        </div>
      ));

    return (
      <div className="recommended-distribution">
        { categories }
      </div>
    );
  }

  render() {
    console.log(this.props);
    if (this.props.transactions.length === 0) return null;
    return (
      <div className="MoneyRecommendations">
        <h3>Transactions</h3>
        { this.renderWithdrawals() }
        { this.renderDeposits() }
        <h3>Recommended Money Distribution</h3>
        { this.renderRecommended() }
      </div>
    );
  }
}

export default MoneyRecommendations;
