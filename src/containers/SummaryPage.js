
import { connect } from 'react-redux';
import history from '../history';
import SummaryPageView from '../views/SummaryPage';
import requestHomescore from '../actions/homescore';
import requestDailyUsage from '../actions/dailyUsage';
import map from 'lodash/map';
import filter from 'lodash/filter';
import first from 'lodash/first';

const redirectToLogin = () => {
  history.push('./');
};

const mapStateToProps = state => {
  return {
    userId: state.login.user,
    username: state.login.name,
    loggedIn: state.login.loggedIn,
    redirectToLogin: redirectToLogin,
    isLoaded: state.homescore.isLoaded,
    homescoreSummary: state.homescore.details.score_text,
    energyUsers: filter(map(state.dailyUsageByUser, (energyUsage, userId) => {
      if (!energyUsage.isLoaded) {
        return false;
      }
      return {
        user: userId,
        isCurrentUser: userId === state.login.user,
        energyUsage: map(energyUsage.dailyEnergyUsage, (usageAndDay) => {
          const usage = first(Object.values(usageAndDay));
          return {
            x: first(Object.keys(usageAndDay)),
            y: usage,
            label: `${usage} kWh`
          };
        })
      };
    }), 'user'),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (userId) => {
      dispatch(requestHomescore(userId));
      dispatch(requestDailyUsage(userId));
    },
  };
};

const SummaryPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SummaryPageView);

export default SummaryPage;

