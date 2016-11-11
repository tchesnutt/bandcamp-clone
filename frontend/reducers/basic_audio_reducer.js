import { merge } from 'lodash';
import { RECEIVE_PLAYING, RECEIVE_SONG } from '../actions/tracks_actions';

const _defaultPlayingState = {
  playing: false,
};

export default (state = _defaultPlayingState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PLAYING:
      if (state.playing === true) {
        return merge({}, state, {playing: false});
      } else {
        return merge({}, state, {playing: true});
      };
    default:
      return state;
  }
};
