export const FETCH_TRACKS = "FETCH_TRACKS";
export const FETCH_TRACK = "FETCH_TRACK";
export const CREATE_TRACK = "CREATE_TRACK";
export const UPDATE_TRACK = "UPDATE_TRACK";
export const RECEIVE_TRACK = "RECEIVE_TRACK";
export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK_ERRORS = "RECEIVE_TRACK_ERRORS";

export const fetchTracks = user_id => ({
  type: FETCH_TRACKS,
  user_id
});

export const fetchTrack = track_id => ({
  type: FETCH_TRACK,
  track_id
});

export const createTrack = track => ({
  type: CREATE_TRACK,
  track
});

export const updateTrack = track => ({
  type: UPDATE_TRACK,
  track
});

export const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

export const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});

export const receiveTracksErrors = error => ({
  type: RECEIVE_TRACK_ERRORS,
  error
});
