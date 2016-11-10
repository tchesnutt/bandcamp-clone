import {merge} from 'lodash';
import {RECEIVE_PLAYING} from '../actions/tracks_actions';

const _defaultPlayingState = {
  playing: false
};

export default (state = _defaultPlayingState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_PLAYING:
    console.log(action);
      return merge({}, {playing: action.track});
    default:
      return state;
  }
};