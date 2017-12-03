
import { connect } from 'react-redux'
import ComparisonListView from '../views/ComparisonList';

const mapStateToProps = state => {
  return {
    comparisons: state.comparisons.comparisons,
  }
}

const mapDispatchToProps = dispatch => {
  return {};
}

const ComparisonList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComparisonListView);

export default ComparisonList;

