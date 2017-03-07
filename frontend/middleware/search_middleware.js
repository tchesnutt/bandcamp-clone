import {
  FETCH_SEARCH_RESULTS,
  RECIEVE_SEARCH_RESULTS,
  fetchSearchResults,
  recieveSearchResults
}
from '../actions/search_actions';
import {
  fetchSearchResults
} from '../util/user_api_util';

const SearchMiddleware = ( { dispatch } ) => next => action => {
  switch ( action.type ) {
  case FETCH_SEARCH_RESULTS:
    fetchUser( action.user_id, successUser, errorCallback );
    return next( action );
  case RECIEVE_SEARCH_RESULTS:
    fetchUsers( action.searchParams, successUsers, errorCallback );
    return next( action );
  default:
    return next( action );
  }
};

export default UserMiddleware;
