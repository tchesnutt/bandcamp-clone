import AlbumReducer from '../reducers/album_reducer';
import RootReducer from '../reducers/root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('AlbumReducer', () => {
    it('exports an function', () => {
      expect(typeof AlbumReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      expect(AlbumReducer(undefined, {})).toEqual({});
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = AlbumReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_ALBUMS action', () => {
      let action,
          testAlbums;

      beforeEach(() => {
        testAlbums = { 1: 'testAlbum1', 2: 'testAlbum2' };
        action = {
          type: 'RECEIVE_ALBUMS',
          albums: testAlbums
        };
      });

      it('should replace the state with the action\'s albums', () => {
        const state = AlbumReducer(undefined, action);
        expect(state).toEqual(testAlbums);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        AlbumReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the RECEIVE_ALBUM action', () => {
      let action,
          testAlbum;

      beforeEach(() => {
        testAlbum = { id: 1, title: 'testAlbum' };
        action = {
          type: 'RECEIVE_ALBUM',
          album: testAlbum
        };
      });

      it('should add the album to the state using the album id as a key', () => {
        let state = AlbumReducer(undefined, action);
        expect(state[1]).toEqual(testAlbum);
      });

      it('should not affect the other albums in the state', () => {
        let oldState = { 2: 'oldState' };
        let state = AlbumReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
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

    it('includes the AlbumReducer under the key `albums`', () => {
      const album = { id: 1, title: 'Root Reducer', content: 'Testing' };
      const action = { type: 'RECEIVE_ALBUM', album };
      testStore.dispatch(action);

      expect(testStore.getState().albums).toEqual(AlbumReducer({ [album.id]: album }, action));
    });
  });
});
Contact GitHub
