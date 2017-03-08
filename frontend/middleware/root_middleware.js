import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import TrackMiddleware from './track_middleware';
import UserMiddleware from './user_middleware';
import AlbumMiddleware from './album_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SearchMiddleware,
  SessionMiddleware,
  TrackMiddleware,
  UserMiddleware,
  AlbumMiddleware
);

export default RootMiddleware;
