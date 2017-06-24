import { FETCH_SEARCH_RESULTS,
  recieveSearchResults,
  resetSearchResults } from '../actions/search_actions';
import { allSearchQuery } from '../util/search_api_util';


const SearchMiddleware = ( { dispatch } ) => next => action => {
  const recieveSearch = results => dispatch(recieveSearchResults(results));
  const resetSearch = () => dispatch(resetSearchResults());
  switch ( action.type ) {
  case FETCH_SEARCH_RESULTS:
    if(action.query !== ''){
      allSearchQuery( action.query, recieveSearch);
    } else {
      resetSearch();
    }
    return next( action );
  default:
    return next( action );
  }
};

export default SearchMiddleware;
