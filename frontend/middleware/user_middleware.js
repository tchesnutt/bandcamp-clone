import {
  FETCH_USER,
  FETCH_USERS,
  UPDATE_USER,
  receiveUser,
  receiveUsers,
  receiveErrors
}
from '../actions/user_actions';
import {
  fetchUser,
  fetchUsers,
  updateUser
} from '../util/user_api_util';
import { closeAuthModal } from '../actions/modal_actions';


const UserMiddleware = ( { dispatch } ) => next => action => {
  const successUser = user => { dispatch( receiveUser( user ) ); };
  const successEditUser = user => {
    dispatch( receiveUser( user ) );
    dispatch( closeUserEditModal());
  };
  const successUsers = users => { dispatch( receiveUsers( users ) ) };
  const errorCallback = error => { dispatch( receiveErrors( error.responseJSON ) ) };
  switch ( action.type ) {
  case FETCH_USER:
    fetchUser( action.user_id, successUser, errorCallback );
    return next( action );
  case FETCH_USERS:
    fetchUsers( action.searchParams, successUsers, errorCallback );
    break;
  case UPDATE_USER:
    updateUser( action.user, successUser, errorCallback );
    return next( action );
  default:
    return next( action );
  }
};

export default UserMiddleware;
