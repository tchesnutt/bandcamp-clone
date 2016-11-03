import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("recieving current user")
      console.log(action.errors);
      return merge({}, state, { currentUser: action.currentUser });
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      console.log("recieving errors")
      console.log(action);
      return merge({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default SessionReducer;
