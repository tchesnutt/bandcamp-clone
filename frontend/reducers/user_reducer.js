import {
  RECEIVE_USER,
  RECEIVE_ERRORS
} from '../actions/user_actions';
import { merge } from 'lodash';

const _nullUsers = {
  errors: []
};

const UserReducer = ( state = _nullUsers, action ) => {
  Object.freeze( state )
  switch ( action.type ) {
  case RECEIVE_USER:
    return merge( {}, state, { [action.user.id]: action.user } );
  case RECEIVE_ERRORS:
    return merge( {}, state, { errors: action.errors } );
  default:
    return state;
  }
};

export default UserReducer;
