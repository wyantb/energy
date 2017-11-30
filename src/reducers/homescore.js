
import { REQUEST_HOMESCORE, HOMESCORE_GET } from '../actions/homescore';

const initialState = {
  user: null,
  details: {},
  isLoaded: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HOMESCORE:
      return Object.assign({}, state, {
        user: action.user,
      });
    case HOMESCORE_GET:
      console.log(action);
      return Object.assign({}, state, {
        isLoaded: true,
        details: action.homescore,
      });
    default:
      return state;
  }
}
