import { combineReducers } from 'redux';

// 原始默认state
const defaultState = {
  count: 5,
  factor: 1
}

function counter(state = defaultState, action) {
  switch (action.type) {
    case 'TEXT':
    default:
      return state;
  }
}

export default combineReducers({
    counter
});