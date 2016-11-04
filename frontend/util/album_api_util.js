export const fetchAlbums = (userId, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    data: {artist_id: userId},
    success,
    error
  })
};

export const fetchAlbum = (album_id, success, error) => {
	$.ajax({
		method: 'GET',
		url: `/api/albums/${album_id}`,
		data: album_id,
		success,
		error
	});
};

export const fetchAllAlbums = success => {
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success
  })
};

export const createAlbum = (album, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/albums',
    data: album,
    success,
    error
  })
};

export const updateAlbum = (album, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/albums/${album.id}`,
    data: album,
    success,
    error
  })
};
