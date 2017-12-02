
import { REQUEST_DAILY_USAGE, DAILY_USAGE_GET } from '../actions/dailyUsage';

const initialState = {
};

export default function dailyUsage(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DAILY_USAGE:
      const res = Object.assign({}, state, {
        [action.user]: {
          isLoaded: false,
        }
      });
      return res;
    case DAILY_USAGE_GET:
      return Object.assign({}, state, {
        [action.user]: {
          isLoaded: true,
          dailyEnergyUsage: action.dailyUsage.daily_energy_usage,
        }
      });
    default:
      return state;
  }
}
