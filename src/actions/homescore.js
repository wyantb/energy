
import { homescoreUrl } from './urls';

export const REQUEST_HOMESCORE = 'REQUEST_HOMESCORE';
export const HOMESCORE_GET = 'HOMESCORE_GET';

export default function requestHomescore(userId) {
  return dispatch => {
    dispatch({
      type: REQUEST_HOMESCORE,
      user: userId
    });
    return fetch(homescoreUrl(userId)).then(
      response => response.json(),
      error => console.error(error),
    ).then(
      (homescore) => {
        dispatch({
          type: HOMESCORE_GET,
          homescore,
        });
      },
    );
  };
}
