import PlayingReducer from '../playing_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';


describe('Reducers', () => {
  describe('PlayingReducer', () => {
    it('exports a function', () => {
      expect(typeof PlayingReducer).toEqual('function');
    });

    it('should initialize with a false value', () => {
      const nullState = {
        playing: false
      };
      expect(PlayingReducer(undefined, {})).toEqual(nullState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = PlayingReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    })

    describe('handling the RECEIVE_PLAY action', () => {
      let action;

      beforeEach(() => {
        action = { type: 'RECEIVE_PLAYING'}
      });

      it('should toggle the boolean of state.playing from false to true', () => {
        const baseState = PlayingReducer(undefined, {});
        const nextState = PlayingReducer(baseState, action);
        expect(nextState.playing).toBeTruthy();
      });

      it('should toggle the boolean of state.playing from true to false', () => {
        const baseState = PlayingReducer({playing: true}, {});
        const nextState = PlayingReducer(baseState, action);
        expect(nextState.playing).toBeFalsy();
      });

      it('should not modigy the old state', () => {
        const oldState = { 1: 'state so old' };
        PlayingReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'state so old'});
      });

    })
  })
})
