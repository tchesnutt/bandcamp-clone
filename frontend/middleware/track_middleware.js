import {
  receiveTrack,
  receiveTracks,
  receiveTrackErrors,
  FETCH_TRACKS,
  CREATE_TRACK,
  UPDATE_TRACK
} from '../actions/tracks_actions';
import {
  fetchTracks,
  createTrack,
  updateTrack
} from '../util/track_api_util';
import { merge } from 'lodash';

const TrackMiddleware = ( { dispatch } ) => next => action => {
  const successTrack = track => dispatch( receiveTrack( track ) );
  const successTracks = tracks => dispatch( receiveTracks( tracks ) );
  const trackErrors = errors => dispatch( receiveTrackErrors( errors.responseText ) );
  switch ( action.type ) {
  case FETCH_TRACKS:
    fetchTracks( action.albumId, successTracks, trackErrors );
    return next( action );
  case CREATE_TRACK:
    createTrack( action.track, successTrack, trackErrors );
    return next( action );
  case UPDATE_TRACK:
    updateTrack( action.track, successTrack, trackErrors );
    return next( action );
  default:
    return next( action );
  }
};

export default TrackMiddleware;
