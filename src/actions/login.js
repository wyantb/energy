
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_CHANGE_USER_NAME = 'LOGIN_CHANGE_USER_NAME';
export const LOGIN_CHANGE_USER_ID = 'LOGIN_CHANGE_USER_ID';

export function changeUserName(name) {
  return dispatch => {
    return dispatch({
      type: LOGIN_CHANGE_USER_NAME,
      name: name,
    });
  };
}

export function changeUserId(userId) {
  return dispatch => {
    return dispatch({
      type: LOGIN_CHANGE_USER_ID,
      user: userId,
    });
  };
}

export function requestLogin(login) {
  return dispatch => {
    dispatch({
      type: LOGIN_ACTION,
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch({
          type: LOGIN_SUCCESS,
        });
        resolve();
      }, 200);
    });
  };
}

