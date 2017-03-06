export const SET_RISK_LEVEL = 'SET_RISK_LEVEL';
export const CALCULATE_TRANSACTIONS = 'CALCULATE_TRANSACTIONS';

export const setRiskLevel = riskLevel => ({
  type: SET_RISK_LEVEL,
  riskLevel
});

export const calculateTransactions = moneyInCategories => ({
  type: CALCULATE_TRANSACTIONS,
  moneyInCategories
});
