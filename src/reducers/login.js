
import { LOGIN_ACTION, LOGIN_SUCCESS } from '../actions/login';

const initialState = {
    user: null,
    loggedIn: false
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ACTION:
            console.log("logging in");
            return Object.assign({}, state, {
                user: action.user,
                name: action.name,
                loggedIn: false,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: state.user,
                name: action.name,
                loggedIn: true,
            });
        default:
            return state;
    }
}
