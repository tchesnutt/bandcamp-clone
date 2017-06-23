import { merge } from 'lodash';
import { RECEIVE_SONG } from '../actions/tracks_actions';

const _defaultTrack = {
  title: "",
  track_url: "",
  cover_url: ""
};

const AudioReducer = (state = _defaultTrack, action) => {
  switch(action.type){
    case RECEIVE_SONG:
      return merge({}, action.track);
    default:
      return state;
  }
};

export default AudioReducer;
