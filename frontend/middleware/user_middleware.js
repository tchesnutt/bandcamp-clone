import {
  FETCH_USER,
  UPDATE_USER,
  receiveUser,
  receiveErrors
}
from '../actions/user_actions';
import {
  fetchUser,
  updateUser
} from '../util/user_api_util';
import { closeEditUserModal } from '../actions/modal_actions';


const UserMiddleware = ( { dispatch } ) => next => action => {
  const successUser = user => { dispatch( receiveUser( user ) ); };
  const successEditUser = user => {
    dispatch( closeEditUserModal() );
    dispatch( receiveUser( user ) );
  };
  const errorCallback = error => { dispatch( receiveErrors( error.responseJSON ) ) };
  switch ( action.type ) {
  case FETCH_USER:
    fetchUser( action.user_id, successUser, errorCallback );
    return next( action );
  case UPDATE_USER:
    updateUser( action.user, successEditUser, errorCallback );
    return next( action );
  default:
    return next( action );
  }
};

export default UserMiddleware;
