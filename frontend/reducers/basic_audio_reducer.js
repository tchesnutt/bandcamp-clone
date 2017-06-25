import { merge } from 'lodash';
import { RECEIVE_SONG } from '../actions/tracks_actions';
import { RECEIVE_ALBUM_ART } from '../actions/album_actions';

const _defaultTrack = {
  title: "",
  trackUrl: "",
  coverUrl: ""
};

const AudioReducer = (state = _defaultTrack, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SONG:
      return merge({}, state, { trackUrl: action.track.track_url,
                                title: action.track.title});
    case RECEIVE_ALBUM_ART:
      return merge({}, state, {coverUrl: action.albums.cover_url})
    default:
      return state;
  }
};

export default AudioReducer;
