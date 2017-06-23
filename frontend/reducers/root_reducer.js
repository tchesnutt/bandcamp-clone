import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import AudioReducer from './basic_audio_reducer';
import TracksReducer from './tracks_reducer';
import PlayingReducer from './playing_reducer';
import AlbumReducer from './album_reducer';
import ModalReducer from './modal_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';


const RootReducer = combineReducers({
    session: SessionReducer,
    tracks: TracksReducer,
    currentSong: AudioReducer,
    playing: PlayingReducer,
    albums: AlbumReducer,
    modals: ModalReducer,
    viewUsers: UserReducer,
    search: SearchReducer
});

export default RootReducer;
