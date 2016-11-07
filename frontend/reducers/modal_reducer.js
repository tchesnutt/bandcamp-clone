import {
    OPEN_AUTH_MODAL,
    CLOSE_AUTH_MODAL,
    OPEN_ADD_ALBUM_MODAL,
    CLOSE_ADD_ALBUM_MODAL
} from '../actions/modal_actions';

import { merge } from 'lodash';

const _defaultState = {
    auth: false,
    addAlbum: false
}


export default (state = _defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_AUTH_MODAL:
            return merge({}, state, { auth: true });
        case CLOSE_AUTH_MODAL:
            return merge({}, state, { auth: false });
        case OPEN_ADD_ALBUM_MODAL:
            return merge({}, state, { addAlbum: true });
        case CLOSE_ADD_ALBUM_MODAL:
            return merge({}, state, { addAlbum: false });
        default:
            return state;
    }
};
