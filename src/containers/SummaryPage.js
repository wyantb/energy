
import { connect } from 'react-redux';
import history from '../history';
import SummaryPageView from '../views/SummaryPage';
import requestHomescore from '../actions/homescore';

const redirectToLogin = () => {
  history.push('/');
};

const mapStateToProps = state => {
  return {
    userId: state.login.user,
    username: state.login.name,
    loggedIn: state.login.loggedIn,
    redirectToLogin: redirectToLogin,
    isLoaded: state.homescore.isLoaded,
    homescoreSummary: state.homescore.details.score_text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (userId) => {
      return dispatch(requestHomescore(userId));
    },
  };
};

const SummaryPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryPageView);

export default SummaryPage;

