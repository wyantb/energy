
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';
import includes from 'lodash/includes';
import AddComparisonView from '../views/AddComparison';
import { changeComparisonName, changeComparisonId, addComparison } from '../actions/comparisons';
import requestDailyUsage from '../actions/dailyUsage';

const mapStateToProps = state => {
  const props = {
    userName: state.comparisons.currentComparison.name,
    userId: state.comparisons.currentComparison.user,
    addHidden: false,
  };
  props.addDisabled = isEmpty(props.userName) || isEmpty(props.userId) || props.userId === state.login.user ||
    includes(map(state.comparisons.comparisons, 'user'), props.userId);
  return props;
}

const mapDispatchToProps = dispatch => {
  return {
    addFriend: (userId) => {
      dispatch(addComparison());
      dispatch(requestDailyUsage(userId));
    },
    nameChange: (ev) => {
      dispatch(changeComparisonName(ev.target.value));
    },
    userChange: (ev) => {
      dispatch(changeComparisonId(ev.target.value));
    },
  }
}

const AddComparison = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddComparisonView);

export default AddComparison;

