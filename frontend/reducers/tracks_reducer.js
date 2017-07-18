import {
  RECEIVE_TRACKS,
  RECEIVE_TRACK_ERRORS
} from '../actions/tracks_actions';
import {
  merge
} from 'lodash';

const _nullTrack = {
  tracks: {},
  errors: []
}

const TracksReducer = ( state = _nullTrack, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case RECEIVE_TRACKS:
    return merge( {}, { tracks: action.tracks } );
  case RECEIVE_TRACK_ERRORS:
    return merge( {}, state, { errors: action.errors } );
  default:
    return state;
  }
};

export default TracksReducer;
