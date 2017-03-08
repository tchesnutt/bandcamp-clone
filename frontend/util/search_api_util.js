export const searchQuery = ( query, success) => {
  $.ajax( {
    method: 'GET',
    url: `/api/albums?search=${query}`,
    success
  } )
};
