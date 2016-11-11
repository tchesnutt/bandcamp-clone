export const FETCH_TRACKS = "FETCH_TRACKS";
export const FETCH_TRACK = "FETCH_TRACK";
export const CREATE_TRACK = "CREATE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";
export const RECEIVE_PLAYING = "RECEIVE_PLAYING";
export const RECEIVE_SONG = "RECEIVE_SONG";

export const receivePlaying = () => ( {
  type: RECEIVE_PLAYING,
})

export const receiveSong = track => ( {
  type: RECEIVE_SONG,
  track
})

export const fetchTracks = albumId => ( {
  type: FETCH_TRACKS,
  albumId
} );

export const fetchTrack = trackId => ( {
  type: FETCH_TRACK,
  trackId
} );


export const createTrack = track => ( {
  type: CREATE_TRACK,
  track
} );

export const updateTrack = track => ( {
  type: UPDATE_TRACK,
  track
} );

export const receiveTrack = track => ( {
  type: RECEIVE_TRACK,
  track
} );

export const receiveTracks = tracks => ( {
  type: RECEIVE_TRACKS,
  tracks
} );

export const receiveTracksErrors = error => ( {
  type: RECEIVE_TRACK_ERRORS,
  error
} );
