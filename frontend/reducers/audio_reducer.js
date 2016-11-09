import {
  RECEIVE_TRACK,
  RECEIVE_TRACKS,
  RECEIVE_TRACK_ERRORS,
  PLAY_TRACKS
} from '../actions/audio_actions';
import {
  merge
} from 'lodash';

const _nullTrack = {
  current: {},
  queue: []
}

const TrackReducer = ( state = _nullTrack, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case RECEIVE_TRACK:
    return merge( {}, state, { queue: action.track } );
  case RECEIVE_TRACKS:
    return merge( {}, state, { queue: action.tracks } );
  case RECEIVE_TRACK_ERRORS:
    return merge( {}, state, { errors: action.errors } );
  default:
    return state;
  }
};

export default TrackReducer;
