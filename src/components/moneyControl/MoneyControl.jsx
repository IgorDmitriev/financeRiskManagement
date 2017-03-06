import React from 'react';
import MoneyInput from './MoneyInput';

// import './MoneyControl.css';

class MoneyControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="MoneyControl">
        <MoneyInput calculateTransactions={ this.props.calculateTransactions }/>
      </div>
    );
  }
}

export default MoneyControl;
