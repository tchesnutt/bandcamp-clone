import AlbumReducer from '../album_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('AlbumReducer', () => {
    it('exports a function', () => {
      expect(typeof AlbumReducer).toEqual('function');
    });

    it('should initialize with an empty object as the default state', () => {
      const nullState = {
        albums: {},
        addAlbum: {},
        albumSearch: [],
        errors: []
      };
      expect(AlbumReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = AlbumReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_ALBUMS action', () => {
      let actionOne, actionTwo, testAlbumsOne, testAlbumsTwo;

      beforeEach(() => {
        testAlbumsOne = { 1: 'testAlbum1', 2: 'testAlbum2' };
        testAlbumsTwo = { 1: 'testAlbum1', 3: 'testAlbum3' };
        actionOne = {
          type: 'RECEIVE_ALBUMS',
          albums: testAlbumsOne
        };
        actionTwo = {
          type: 'RECEIVE_ALBUMS',
          albums: testAlbumsTwo
        };
      });

      it('should replace the state with the action\'s albums', () => {
        const state = AlbumReducer(undefined, actionOne);
        expect(state.albums).toEqual(testAlbumsOne);
      });

      it('should replace previous iterations of other RECEIVE_ALBUMS case', () => {
        let state = AlbumReducer(undefined, actionOne);
        let nextState = AlbumReducer(state, actionTwo);
        expect(nextState.albums).toEqual(testAlbumsTwo);
      })

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        AlbumReducer(oldState, actionOne);
        expect(oldState).toEqual({ 1: 'oldState' });
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
      const action = { type: 'RECEIVE_ALBUMS', album };
      testStore.dispatch(action);

      expect(testStore.getState().albums).toEqual(AlbumReducer(undefined, action));
    });
  });
});
