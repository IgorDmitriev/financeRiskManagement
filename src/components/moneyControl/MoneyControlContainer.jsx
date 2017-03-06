import { connect } from 'react-redux';
import { calculateTransactions } from '../../actions/riskActions';

import MoneyControl from './MoneyControl';

const mapStateToProps = state => (
  {...state.risk}
);

const mapDispatchToProps = dispatch => ({
  calculateTransactions: moneyInCategories => dispatch(calculateTransactions(moneyInCategories))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoneyControl);
  
