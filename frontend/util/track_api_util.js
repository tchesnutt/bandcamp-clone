export const fetchTracks = (albumId, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/tracks',
    data: {album_id: albumId},
    success,
    error
  })
};

export const fetchTrack = (trackId, success, error) => {
	$.ajax({
		method: 'GET',
		url: `/api/tracks/${track_id}`,
		data: trackId,
		success,
		error
	});
};

export const createTrack = (track, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/tracks',
    data: track,
    success,
    error
  })
};

export const updateTrack = (track, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/tracks/${track.id}`,
    data: track,
    success,
    error
  })
};
