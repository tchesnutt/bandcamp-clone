import {
    RECEIVE_ALBUM,
    RECEIVE_ALBUMS,
    RECEIVE_ALL_ALBUMS,
    RECEIVE_ALBUM_ERRORS
} from '../actions/session_actions';
import {
    merge
} from 'lodash';

const _nullAlbums = {
    albums: {},
    errors: []
};

const AlbumReducer = (state = _nullAlbums, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALBUM:
            return merge({}, state, {
                albums: action.album
            });
        case RECEIVE_ALBUMS:
            return merge({}, state, {
                albums: action.albums
            });
        case RECEIVE_ALL_ALBUMS:
            return merge({}, state, {
                albums: action.albums
            });
        case RECEIVE_ALBUM_ERRORS:
            return merge({}, state, {
                errors: action.errors
            });
        default:
            return state;
    }
};

export default AlbumReducer;
