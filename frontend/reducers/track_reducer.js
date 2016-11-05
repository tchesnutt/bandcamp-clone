import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  RECEIVE_TRACK_ERRORS
} from '../actions/session_actions';
import {
  merge
} from 'lodash';

const _nullTrack = {
  tracks: {},
  errors: []
}

const TrackReducer = ( state = _nullTrack, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case RECEIVE_TRACK:
    return merge( {}, state, {
      tracks: action.track
    } );
  case RECEIVE_TRACKS:
    return merge( {}, state, {
      track: action.tracks
    } );
  case RECEIVE_TRACK_ERRORS:
    return merge( {}, state, {
      errors: action.errors
    } );
  default:
    return state;
  }
};

export default TrackReducer;
