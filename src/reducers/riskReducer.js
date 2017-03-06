import deepFreeze from 'deep-freeze';

import {
  SET_RISK_LEVEL,
  CALCULATE_TRANSACTIONS } from '../actions/riskActions';
import {
  getCategoriesDistribution,
  getRecommendedDistribution,
  calculateTransactions } from '../lib/riskDistribution';

const initialState = {
  riskLevel: 1,
  categoriesDistribution: getCategoriesDistribution(1),
  moneyInCategories: {},
  recommendedDistribution: {},
  transactions: []
};

const riskReducer = (state = initialState, action) => {
  deepFreeze(state);

  switch (action.type) {
    case SET_RISK_LEVEL:
      const riskLevel = action.riskLevel;
      const categoriesDistribution = getCategoriesDistribution(riskLevel);

      return ({
        ...state,
        riskLevel,
        categoriesDistribution
      });
    case CALCULATE_TRANSACTIONS:
      const moneyInCategories = action.moneyInCategories;
      const recommendedDistribution =
        getRecommendedDistribution(
          state.categoriesDistribution,
          moneyInCategories);
      const transactions =
        calculateTransactions(
          moneyInCategories,
          recommendedDistribution);

      return ({
        ...state,
        moneyInCategories,
        recommendedDistribution,
        transactions
      });
    default:
      return state;
  }
};

export default riskReducer;
