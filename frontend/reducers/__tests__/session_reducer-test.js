import SessionReducer from '../session_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('SessionReducer', () => {
    it('exports a function', () => {
      expect(typeof SessionReducer).toEqual('function');
    });

    it('should initialize with false values for all fields', () => {
      const nullState = {
        currentUser: null,
        errors: {}
      };
      expect(SessionReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'supa old' };
      const newState = SessionReducer(oldState, { type: 'unmatchedtype'});
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_CURRENT_USER action', () => {
      let action, payload;

      beforeEach(() => {
        payload = { name: 'Henry' };
        action = {
          type: 'RECEIVE_CURRENT_USER',
          currentUser: payload
        };
      });

      it('should populate state.currentUser with payload', () => {
        const state = SessionReducer(undefined, action);
        expect(state.currentUser).toEqual(payload);
      });

      it('should not modify the old state', () => {
        const oldState = { 1: 'old' };
        const newState = SessionReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'old' });
      });
    });

    describe('handling the LOGOUT action', () => {
      let actionLogout, payload, actionLogin;

      beforeEach(() => {
        actionLogout = { type: 'LOGOUT' };
        payload = { name: 'Henry' };
        actionLogin = {
          type: 'RECEIVE_CURRENT_USER',
          currentUser: payload
        };
      });

      it('should clear the state\s currentUser', () => {
        const nullState = {
          currentUser: null,
          errors: {}
        };
        const popState = SessionReducer(undefined, actionLogin);
        const clearState = SessionReducer(popState, actionLogout);
        expect(clearState).toEqual(nullState);
      });

      it('should not modify the old state', () => {
        const oldState = { 1: 'SUPA old' };
        const newState = SessionReducer(oldState, actionLogout);
        expect(oldState).toEqual({ 1: 'SUPA old' });
      })
    });

    describe('handling the RECEIVE_ERRORS action', () => {
      let action, payload;

      beforeEach(() => {
        payload = { badChild: 'badHenry' };
        action = {
          type: 'RECEIVE_ERRORS',
          errors: payload
        };
      });

      it('should populate state.errors with payload', () => {
        const state = SessionReducer(undefined, action);
        expect(state.errors).toEqual(payload);
      });

      it('should not modify the old state', () => {
        const oldState = { 1: 'REALLY OLD' };
        const newState = SessionReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'REALLY OLD' });
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('includes the SessionReducer under the key `session`', () => {
      const action = { type: 'RECEIVE_CURRENT_USER' };
      testStore.dispatch(action);
      expect(testStore.getState().session).toEqual(SessionReducer(undefined, action));
    });
  });
});
