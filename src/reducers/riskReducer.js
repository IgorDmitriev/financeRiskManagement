import { SET_RISK_LEVEL } from '../actions/riskActions';
import deepFreeze from 'deep-freeze';
import { getCategoriesDistribution } from '../lib/riskDistribution';

const initialState = {
  riskLevel: 1,
  categoriesDistribution: getCategoriesDistribution(1)
};

const riskReducer = (state = initialState, action) => {
  deepFreeze(state);

  switch (action.type) {
    case SET_RISK_LEVEL:
      const riskLevel = action.riskLevel;
      const categoriesDistribution = getCategoriesDistribution(riskLevel);

      return ({
        riskLevel,
        categoriesDistribution
      });
    default:
      return state;
  }
};

export default riskReducer;
