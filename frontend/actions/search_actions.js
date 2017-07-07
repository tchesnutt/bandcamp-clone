export const FETCH_SEARCH_RESULTS = "FETCH_SEARCH_RESULTS";
export const RECEIVE_SEARCH_RESULTS = "RECIEVE_SEARCH_RESULTS";
export const RESET_SEARCH_RESULTS = "RESET_SEARCH_RESULTS";

export const fetchSearchResults = query => ({
  type: FETCH_SEARCH_RESULTS,
  query
});

export const recieveSearchResults = query_results => ({
  type: RECEIVE_SEARCH_RESULTS,
  query_results
});

export const resetSearchResults = () => ({
  type: RESET_SEARCH_RESULTS
});
