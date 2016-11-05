export const fetchUser = ( userId, success, error ) => {
  $.ajax( {
    method: 'GET',
    url: `/api/users/${userId}`,
    success,
    error
  } );
};

export const fetchUsers = ( searchParams, success, error ) => {
  $.ajax( {
    method: 'GET',
    url: '/api/users',
    data: { username: searchParams },
    success,
    error
  } );
};

export const updateUser = ( user, success, error ) => {
  $.ajax( {
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: { user },
    success,
    error
  } );
};
