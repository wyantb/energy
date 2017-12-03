
import union from 'lodash/union';
import { DO_ADD_COMPARISON, DO_REMOVE_COMPARISON, COMPARISON_CHANGE_USER_NAME, COMPARISON_CHANGE_USER_ID } from '../actions/comparisons';

const initialState = {
  currentComparison: {},
  comparisons: [],
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case DO_ADD_COMPARISON:
      if (!(state.currentComparison.name && state.currentComparison.user)) {
        throw new Error('Preconditions violated: did not have name and id');
      }
      return {
        currentComparison: {},
        comparisons: union(state.comparisons, [state.currentComparison]),
      };
    case DO_REMOVE_COMPARISON:
      throw new Error('Not yet implemented');
    case COMPARISON_CHANGE_USER_NAME:
      return Object.assign({}, state, {
        currentComparison: Object.assign({}, state.currentComparison, {
          name: action.name,
        }),
      });
    case COMPARISON_CHANGE_USER_ID:
      return Object.assign({}, state, {
        currentComparison: Object.assign({}, state.currentComparison, {
          user: action.user,
        }),
      });
    default:
      return state;
  }
}
