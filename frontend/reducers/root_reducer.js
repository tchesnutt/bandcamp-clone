import {
    combineReducers
} from 'redux';

import SessionReducer from './session_reducer';
import TrackReducer from './track_reducer';
import AlbumReducer from './album_reducer';
import ModalReducer from './modal_reducer';
import UserReducer from './user_reducer';


const RootReducer = combineReducers({
    session: SessionReducer,
    tracks: TrackReducer,
    albums: AlbumReducer,
    modals: ModalReducer,
    viewUsers: UserReducer
});

export default RootReducer;
