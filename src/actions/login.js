
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export default function requestLogin(login) {
  return dispatch => {
    dispatch({
      type: LOGIN_ACTION,
      user: login.user,
      name: login.name,
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // TODO change route
        dispatch({
          type: LOGIN_SUCCESS,
          user: login.user,
          name: login.name,
        });
        resolve();
      }, 200);
    });
  };
};

