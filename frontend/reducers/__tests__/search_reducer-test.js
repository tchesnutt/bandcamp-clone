import SearchReducer from '../search_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('SearchReducer', () => {
    it('exports a function', () => {
      expect(typeof SearchReducer).toEqual('function');
    });

    it('should initialize with a false value', () => {
      const nullState = {
        query: undefined,
        result: {
          artists: [],
          albums: [],
          tracks: [],
          album_art: []
        }
      };
      expect(SearchReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = SearchReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    })

    describe('handling the RECIEVE_SEARCH_RESULTS action', () => {
      let action, payload;

      beforeEach(() => {
        payload = {
          artists: ['artist1', 'artist2', 'artist3'],
          albums: ['album1', 'album2', 'album3'],
          tracks: ['track1', 'track2', 'track3'],
          album_art: ['albumArt1', 'albumArt2', 'albumArt3']
        };
        action = {
          type: 'RECIEVE_SEARCH_RESULTS',
          query_results: payload
        }
      });

      it('should replace the state.result with the action\s results', () => {
        const state = SearchReducer(undefined, action);
        expect(state.result).toEqual(payload);
      });

      it('should not modify the old state', () => {
        const oldState = { 1: 'state so old' };
        SearchReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'state so old'});
      });
    });

    describe('handling the RESET_SEARCH_RESULTS action', () => {
      let actionReceive, actionReset, payload;

      beforeEach(() => {
        payload = {
          artists: ['artist1', 'artist2', 'artist3'],
          albums: ['album1', 'album2', 'album3'],
          tracks: ['track1', 'track2', 'track3'],
          album_art: ['albumArt1', 'albumArt2', 'albumArt3']
        }
        actionReceive = {
          type: 'RECIEVE_SEARCH_RESULTS',
          query_results: payload
        };
        actionReset = { type: 'RESET_SEARCH_RESULTS' };
      });

      it('should clear the state', () => {
        const blankState = SearchReducer(undefined, {});
        const fullState = SearchReducer(blankState, actionReceive);
        const resetState = SearchReducer(fullState, actionReset);
        expect(resetState.result).not.toEqual(fullState.result)
      });

      it('should not modify the old state', () => {
        const oldState = { 1: 'state so old' };
        SearchReducer(oldState, actionReset);
        expect(oldState).toEqual({ 1: 'state so old'});
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('includes the SearchReducer under the key `search`', () => {
      const action = { type: 'RECIEVE_SEARCH_RESULTS' };
      testStore.dispatch(action);
      expect(testStore.getState().search).toEqual(SearchReducer(undefined, action));
    })
  })
})
