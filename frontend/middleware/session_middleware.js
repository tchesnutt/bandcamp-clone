import {
  receiveCurrentUser,
  receiveErrors,
  LOGIN,
  LOGOUT,
  SIGNUP
}
from '../actions/session_actions';
import {
  login,
  signup,
  logout
} from '../util/session_api_util';
import { closeAuthModal } from '../actions/modal_actions';

const SessionMiddleware = ( { dispatch } ) => next => action => {
  const successCallback = user => {
    dispatch( closeAuthModal() );
    dispatch( receiveCurrentUser( user ) );
  };
  const errorCallback = error => { dispatch( receiveErrors( error.responseJSON ) ) };
  switch ( action.type ) {
  case LOGIN:
    login( action.user, successCallback, errorCallback );
    return next( action );
  case LOGOUT:
    logout( () => next( action ) );
    break;
  case SIGNUP:
    signup( action.user, successCallback, errorCallback );
    return next( action );
  default:
    return next( action );
  }
};

export default SessionMiddleware;
