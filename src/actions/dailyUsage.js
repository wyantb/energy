

import { dailyUsageUrl } from './urls';

export const REQUEST_DAILY_USAGE = 'REQUEST_DAILY_USGE';
export const DAILY_USAGE_GET = 'DAILY_USAGE_GET';

export default function requestDailyUsage(userId) {
  return dispatch => {
    dispatch({
      type: REQUEST_DAILY_USAGE,
      user: userId
    });
    return fetch(dailyUsageUrl(userId)).then(
      response => response.json(),
      error => console.error(error),
    ).then(
      (dailyUsage) => {
        dispatch({
          type: DAILY_USAGE_GET,
          user: userId,
          dailyUsage,
        });
      },
    );
  };
}
