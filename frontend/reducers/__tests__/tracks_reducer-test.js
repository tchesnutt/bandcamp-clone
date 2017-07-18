import TracksReducer from '../tracks_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('TracksReducer', () => {
    it('exports a function', () => {
      expect(typeof TracksReducer).toEqual('function');
    });

    it('should intialize with empty values for all fields', () => {
      const nullState = {
        tracks: {},
        errors: []
      };
      expect(TracksReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = TracksReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_TRACKS action', () => {
      let action, payload;

      beforeEach(() => {
        payload = [
          {title: 'track',
           url: 'www.test.testing'}
         ];
        action = {
          type: 'RECEIVE_TRACKS',
          tracks: payload
        };
      });

      it('should populate state.tracks', () => {
        const state = TracksReducer(undefined, action);
        expect(state.tracks).toEqual(action.tracks);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'ye old state' };
        TracksReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'ye old state' });
      });
    });

    describe('handling the RECEIVE_TRACK_ERRORS action', () => {
      let action, payload;

      beforeEach(() => {
        payload = ['the greatest of errors']
        action = {
          type: 'RECEIVE_TRACK_ERRORS',
          errors: payload
        };
      });

      it('should populate state.errors', () => {
        const state = TracksReducer(undefined, action);
        expect(state.errors).toEqual(action.errors);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'aarp' };
        TracksReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'aarp' });
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('includes the TracksReducer uner the key `tracks`', () => {
      const action = {
        type: 'RECEIVE_TRACK_ERRORS',
        errors: 'not so bad'
      };
      testStore.dispatch(action);
      expect(testStore.getState().tracks).toEqual(TracksReducer(undefined, action));
    });
  });
});
