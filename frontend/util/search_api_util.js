export const searchQuery = ( query, success ) => {
  $.ajax( {
    method: 'GET',
    url: `/api/albums?search=${query}`,
    success
  } )
};

export const allSearchQuery = ( query, success ) => {
  $.ajax( {
    method: 'GET',
    url: `/api/search?query=${query}`,
    success
  } )
};
