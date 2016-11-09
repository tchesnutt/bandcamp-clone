import { applyMiddleware } from 'redux';
import sessionMiddleware from './session_middleware';
import TrackMiddleware from './track_middleware';
import AlbumMiddleware from './album_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  sessionMiddleware,
  TrackMiddleware,
  AlbumMiddleware,
  UserMiddleware
);

export default RootMiddleware;
