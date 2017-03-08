export const searchQuery = ( query, success) => {
  $.ajax( {
    url: '/api/albums?search=${query}',
    success
  } )
};
