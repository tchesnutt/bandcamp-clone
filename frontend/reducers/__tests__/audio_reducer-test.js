import AudioReducer from '../basic_audio_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('AudioReducer', () => {
    it('exports a function', () => {
      expect(typeof AudioReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      const nullState = {
        id: "",
        title: "",
        trackUrl: "",
        coverUrl: ""
      };
      expect(AudioReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = AudioReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_SONG action', () => {
      let action, payload;

      beforeEach(() => {
        payload = {
          track_url: 'testUrl',
          other_info: 'testOtherInfo',
          title: 'testTitle',
          id: '1'
        };
        action = {
          type: 'RECEIVE_SONG',
          track: payload
        };
      });

      it('should replace the state with the track\s track_url, title, id', () => {
        const state = AudioReducer(undefined, action);
        let truth = true;
        if(state.trackUrl !== payload.track_url){
          truth = "bad track_url";
        }
        if(state.title !== payload.title){
          truth = "bad title";
        }
        if(state.id !== payload.id){
          truth = "bad id";
        }
        expect(truth).toEqual(true);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'I\m so old' };
        AudioReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'I\m so old' });
      });
    });

    describe('handling the RECEIVE_ALBUM_ART action', () => {
      let action, payload;

      beforeEach(() => {
        payload = {
          cover_url: 'testCoverUrl',
          title: 'testTitle',
          id: '1'
        };
        action = {
          type: 'RECEIVE_ALBUM_ART',
          albums: payload
        };
      });

      it('should replace the state with the track\s coverUrl', () => {
        const state = AudioReducer(undefined, action);
        expect(state.coverUrl).toEqual(payload.cover_url);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'I\m so old' };
        AudioReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'I\m so old' });
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the AudioReducer under the key `currentSong`', () => {
      const track = { id: 1, title: 'Root Reducer', trackUrl: 'success.test.ing' };
      const action = { type: 'RECEIVE_SONG', track };
      testStore.dispatch(action);

      expect(testStore.getState().currentSong).toEqual(AudioReducer(undefined, action));
    });
  });
});
