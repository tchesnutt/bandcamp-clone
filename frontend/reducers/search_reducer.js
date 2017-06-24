import { RECIEVE_SEARCH_RESULTS, RESET_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';


const _nullResult = {
  query: undefined,
  result: {
    artists: [],
    albums: [],
    tracks: [],
    album_art: []
  }
};

const SearchReducer = ( state = _nullResult, action ) => {
  Object.freeze(state);
  console.log(action);
  switch ( action.type ) {
  case RECIEVE_SEARCH_RESULTS:
    return merge( {}, { result: action.query_results } );
  case RESET_SEARCH_RESULTS:
    return merge( {}, _nullResult);
  default:
    return state;
  }
};

export default SearchReducer;
