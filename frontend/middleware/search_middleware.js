import { FETCH_SEARCH_RESULTS,
  recieveSearchResults } from '../actions/search_actions';
import { searchQuery, allSearchQuery } from '../util/search_api_util';


const SearchMiddleware = ( { dispatch } ) => next => action => {
  const recieveSearch = results => dispatch(recieveSearchResults(results))
  switch ( action.type ) {
  case FETCH_SEARCH_RESULTS:
    allSearchQuery( action.query, recieveSearch);
    return next( action );
  default:
    return next( action );
  }
};

export default SearchMiddleware;
