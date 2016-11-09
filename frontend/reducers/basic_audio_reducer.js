import {merge} from 'lodash';
import {RECEIVE_PLAYING} from '../actions/tracks_actions';

const _defaultPlayingState = {
  playing: false
};

export default (state = _defaultPlayingState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PLAYING:
      return merge({}, {playing: action.type});
    default:
      return state;
  }
};
