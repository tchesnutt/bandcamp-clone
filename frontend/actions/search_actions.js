export const FETCH_SEARCH_RESULTS = "FETCH_SEARCH_RESULTS";
export const RECIEVE_SEARCH_RESULTS = "RECIEVE_SEARCH_RESULTS";

export const fetchSearchResults = query => ({
  type: FETCH_SEARCH_RESULTS,
  query
});

export const recieveSearchResults = query_results => ({
  type: RECIEVE_SEARCH_RESULTS,
  query_results
});
