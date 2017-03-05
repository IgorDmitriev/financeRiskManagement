import { connect } from 'react-redux';
import { setRiskLevel } from '../../actions/riskActions';

import RiskLevel from './RiskLevel';

const mapStateToProps = state => (
  {...state.risk}
);

const mapDispatchToProps = dispatch => ({
  setRiskLevel: riskLevel => dispatch(setRiskLevel(riskLevel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RiskLevel);
