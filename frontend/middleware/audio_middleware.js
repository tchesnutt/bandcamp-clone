import { RECEIVE_SONG } from '../actions/tracks_actions';
import { receiveAlbumArt } from '../actions/album_actions';
import { fetchAlbum } from '../util/album_api_util';


const AudioMiddleware = ( { dispatch } ) => next => action => {
  const successAlbumArt = ( album ) => dispatch(receiveAlbumArt(album));
  switch ( action.type ) {
  case RECEIVE_SONG:
    fetchAlbum( action.track.album_id, successAlbumArt);
    return next( action );
  default:
    return next( action );
  }
};

export default AudioMiddleware;
