import {
  RECEIVE_ALBUM,
  RECEIVE_ALBUMS,
  RECEIVE_ALL_ALBUMS,
  RECEIVE_ALBUM_ERRORS
} from '../actions/album_actions';
import { merge } from 'lodash';

const _nullAlbums = {
  albums: {},
  addAlbum: {},
  albumSearch: [],
  errors: []
};

const AlbumReducer = ( state = _nullAlbums, action ) => {
  Object.freeze( state );
  switch ( action.type ) {
  case RECEIVE_ALBUM:
    return merge( {}, state, { [ action.album.id ]: action.album } );
  case RECEIVE_ALBUMS:
    return merge( {}, state, { albums: action.albums } );
  case RECEIVE_ALL_ALBUMS:
    let newState = merge( {}, state, { albumSearch: action.albums } );
    newState.albumSearch = newState.albumSearch.slice(1);
    return newState;
  case RECEIVE_ALBUM_ERRORS:
    return merge( {}, state, { errors: action.errors } );
  default:
    return state;
  }
};

export default AlbumReducer;
