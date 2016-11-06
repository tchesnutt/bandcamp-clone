import {
  receiveAlbum,
  receiveAlbums,
  receiveAllAlbums,
  receiveAlbumErrors,
  FETCH_ALBUM,
  FETCH_ALBUMS,
  FETCH_ALL_ALBUMS,
  CREATE_ALBUM,
  UPDATE_ALBUM
} from '../actions/album_actions';
import {
  fetchAlbums,
  fetchAlbum,
  fetchAllAlbums,
  createAlbum,
  updateAlbum
} from '../util/album_api_util';
import { merge } from 'lodash';

const AlbumMiddleware = ( { dispatch } ) => next => action => {
  const successAlbum = album => dispatch( receiveAlbum( album ) );
  const successAlbums = albums => {  dispatch( receiveAlbums( albums ) ); }
  const successAllAlbums = allAlbums => dispatch( receiveAllAlbums( allAlbums ) );
  const albumErrors = errors => dispatch( receiveAlbumErrors( errors.responseText ) );
  switch ( action.type ) {
  case FETCH_ALBUM:
    fetchAlbums( action.albumId, successAlbum, albumErrors );
    return next( action );
  case FETCH_ALBUMS:
    fetchAlbums( action.user_id, successAlbums, albumErrors );
    return next( action )
  case FETCH_ALL_ALBUMS:
    fetchAllAlbums( successAllAlbums );
    return next( action );
  case CREATE_ALBUM:
    createAlbum( action.album, successAlbum, albumErrors );
    return next( action );
  case UPDATE_ALBUM:
    updateAlbum( action.album, successAlbum, albumErrors );
    return next( action );
  default:
    return next( action );
  }
};

export default AlbumMiddleware;
