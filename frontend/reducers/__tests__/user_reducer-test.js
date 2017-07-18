import UserReducer from '../user_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('UserReducer', () => {
    it('exports a function', () => {
      expect(typeof UserReducer).toEqual('function');
    });

    it('should initialize with a null state', () => {
      const nullState = {
        errors: []
      };
      expect(UserReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the prvious state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = UserReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the RECEIVE_USER action', () => {
      let action, user;

      beforeEach(() => {
        user = {
          name: 'henry',
          id: 1
        };
        action = {
          type: 'RECEIVE_USER',
          user
        };
      });

      it('should populate state.userId with data', () => {
        const state = UserReducer(undefined, action);
        expect(state[action.user.id]).toEqual(action.user);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        UserReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });

    describe('handling the RECEIVE_ERRORS action', () => {
      let action, errors;

      beforeEach(() => {
        errors = ['get real no errors here'];
        action = {
          type: 'RECEIVE_ERRORS',
          errors
        };
      });

      it('should populate state.errors with data', () => {
        const state = UserReducer(undefined, action);
        expect(state.errors).toEqual(action.errors);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        UserReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('includes the UserReducer under the key `viewUsers`', () => {
      const action = { type: 'RECEIVE_ERRORS', errors: ['this is an error']};
      testStore.dispatch(action);
      expect(testStore.getState().viewUsers).toEqual(UserReducer(undefined, action));
    });
  });
});
