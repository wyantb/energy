
import { LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_CHANGE_USER_NAME, LOGIN_CHANGE_USER_ID } from '../actions/login';

const initialState = {
  user: 1,
  name: 'Brian',
  loggedIn: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return Object.assign({}, state, {
        loggedIn: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loggedIn: true,
      });
    case LOGIN_CHANGE_USER_NAME:
      return Object.assign({}, state, {
        name: action.name,
      });
    case LOGIN_CHANGE_USER_ID:
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
      return state;
  }
}
