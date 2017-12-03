
export const DO_ADD_COMPARISON = 'DO_ADD_COMPARISON';
export const DO_REMOVE_COMPARISON = 'DO_REMOVE_COMPARISON';
export const COMPARISON_CHANGE_USER_NAME = 'COMPARISON_CHANGE_USER_NAME';
export const COMPARISON_CHANGE_USER_ID = 'COMPARISON_CHANGE_USER_ID';

export function changeComparisonName(name) {
  return dispatch => {
    return dispatch({
      type: COMPARISON_CHANGE_USER_NAME,
      name: name,
    });
  };
}

export function changeComparisonId(userId) {
  return dispatch => {
    return dispatch({
      type: COMPARISON_CHANGE_USER_ID,
      user: userId,
    });
  };
}

export function addComparison() {
  return dispatch => {
    return dispatch({ type: DO_ADD_COMPARISON });
  };
}

export function doRemoveComparison() {
  return dispatch => {
    return dispatch({ type: DO_REMOVE_COMPARISON });
  };
}

