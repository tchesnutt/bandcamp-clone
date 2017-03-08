import { RECIEVE_SEARCH_RESULTS } from '../actions/search_actions';
import { merge } from 'lodash';


const _nullResult = {
  query: undefined,
  result: []
};

const SearchReducer = ( state = _nullResult, action ) => {
  Object.freeze(state);
  switch ( action.type ) {
  case RECIEVE_SEARCH_RESULTS:
    return merge( {}, { result: action.query_results } );
  default:
    return state;
  }
};

export default SearchReducer;
