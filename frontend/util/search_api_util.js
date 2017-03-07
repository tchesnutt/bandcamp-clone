export const fetchSearchResults = ( string, success, error ) => {
  $.ajax( {
    method: 'GET',
    url: '/api/search',
    data: { query: string },
    success,
    error
  } )
};
