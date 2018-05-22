import { combineReducers } from 'redux';
import Storage from './Storage';
// 原始默认state
const defaultState = {
  islogin:false,
  count: 5,
  factor: 1
}

 function counter(state = defaultState, action) {
  switch (action.type) {
    case 'TEXT':
    return { ...state, count: state.count + 1 };
    case 'ISLOGIN':
    alert(JSON.stringify(action));

    return { ...state, islogin: true };
    default:
      return state;
  }
}

export default combineReducers({
    counter
});