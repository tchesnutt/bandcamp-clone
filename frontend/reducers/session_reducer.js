import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze( {
  currentUser: null,
  errors: []
} );

const SessionReducer = ( state = _nullUser, action ) => {
  Object.freeze( state )
  switch ( action.type ) {
  case RECEIVE_CURRENT_USER:
    return merge( {}, state, { currentUser: action.currentUser } );
  case LOGOUT:
    return merge( {}, _nullUser );
  case RECEIVE_ERRORS:
    return merge( {}, state, { errors: action.errors } );
  default:
    return state;
  }
};

export default SessionReducer;
