import React from 'react';

const Transaction = ({ category, amount }) => (
  <li>
    <span className="transaction-category">{ category }</span>
    <span className="transaction-amount">{ amount }</span>
  </li>
);

export default Transaction;
