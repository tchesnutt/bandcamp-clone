import ModalReducer from '../modal_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('ModalReducer', () => {
    it('exports a function', () => {
      expect(typeof ModalReducer).toEqual('function');
    });

    it('should initialize with false values for all fields', () => {
      const nullState = {
        auth: false,
        addAlbum: false,
        editUser: false
      };
      expect(ModalReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ModalReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handling the OPEN_AUTH_MODAL action', () => {
      let action;

      beforeEach(() => {
        action = { type: 'OPEN_AUTH_MODAL' }
      });

      it('should make state.auth equal to true', () => {
        const state = ModalReducer(undefined, action);
        expect(state.auth).toEqual(true);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        ModalReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });

    describe('handling the CLOSE_AUTH_MODAL action', () => {
      let action;

      beforeEach(() => {
        action = { type: 'CLOSE_AUTH_MODAL' }
      });

      it('should make state.auth equal to false', () => {
        const state = ModalReducer(undefined, action);
        expect(state.auth).toEqual(false);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        ModalReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });

    describe('handling the OPEN_ADD_ALBUM_MODAL action', () => {
      let action;

      beforeEach(() => {
        action = { type: 'OPEN_ADD_ALBUM_MODAL' }
      });

      it('should make state.addAlbum equal to true', () => {
        const state = ModalReducer(undefined, action);
        expect(state.addAlbum).toEqual(true);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        ModalReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });

    describe('handling the CLOSE_ADD_ALBUM_MODAL action', () => {
      let action;

      beforeEach(() => {
        action = { type: 'CLOSE_ADD_ALBUM_MODAL' }
      });

      it('should make state.addAlbum equal to false', () => {
        const state = ModalReducer(undefined, action);
        expect(state.addAlbum).toEqual(false);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        ModalReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });

    describe('handling the OPEN_EDIT_USER_MODAL action', () => {
      let action;

      beforeEach(() => {
        action = { type: 'OPEN_EDIT_USER_MODAL' }
      });

      it('should make state.editUser equal to true', () => {
        const state = ModalReducer(undefined, action);
        expect(state.editUser).toEqual(true);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        ModalReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });

    describe('handling the CLOSE_EDIT_USER_MODAL action', () => {
      let action;

      beforeEach(() => {
        action = { type: 'CLOSE_EDIT_USER_MODAL' }
      });

      it('should make state.editUser equal to false', () => {
        const state = ModalReducer(undefined, action);
        expect(state.editUser).toEqual(false);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldest state in existance' };
        ModalReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldest state in existance' });
      });
    });
  });

  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('includes the ModalReducer under the key `modals`', () => {
      const action = { type: 'OPEN_AUTH_MODAL' };
      testStore.dispatch(action);
      expect(testStore.getState().modals).toEqual(ModalReducer(undefined, action));
    });
  });
});
