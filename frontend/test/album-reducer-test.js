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

    describe('handling the RECEIVE_ALL_POSTS action', () => {
      let action,
          testPosts;

      beforeEach(() => {
        testPosts = { 1: 'testPost1', 2: 'testPost2' };
        action = {
          type: 'RECEIVE_ALL_POSTS',
          posts: testPosts
        };
      });

      it('should replace the state with the action\'s posts', () => {
        const state = AlbumReducer(undefined, action);
        expect(state).toEqual(testPosts);
      });

      it('should not modify the old state', () => {
        let oldState = { 1: 'oldState' };
        AlbumReducer(oldState, action);
        expect(oldState).toEqual({ 1: 'oldState' });
      });
    });

    describe('handling the RECEIVE_POST action', () => {
      let action,
          testPost;

      beforeEach(() => {
        testPost = { id: 1, title: 'testPost' };
        action = {
          type: 'RECEIVE_POST',
          post: testPost
        };
      });

      it('should add the post to the state using the post id as a key', () => {
        let state = AlbumReducer(undefined, action);
        expect(state[1]).toEqual(testPost);
      });

      it('should not affect the other posts in the state', () => {
        let oldState = { 2: 'oldState' };
        let state = AlbumReducer(oldState, action);
        expect(state[2]).toEqual('oldState');
      });
    });

    describe('handling the REMOVE_POST action', () => {
      let action,
          testPost;

      beforeEach(() => {
        testPost = { id: 1, title: 'testPost' };
        action = {
          type: 'REMOVE_POST',
          post: testPost
        };
      });

      it('should remove the correct post from the state', () => {
        let state = AlbumReducer({ 1: testPost }, action);
        expect(typeof state[1]).toEqual('undefined');
      });

      it('should not affect the other posts in the state', () => {
        let oldState = { 1: testPost, 2: 'oldState' };
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

    it('includes the AlbumReducer under the key `posts`', () => {
      const post = { id: 1, title: 'Root Reducer', content: 'Testing' };
      const action = { type: 'RECEIVE_POST', post };
      testStore.dispatch(action);

      expect(testStore.getState().posts).toEqual(AlbumReducer({ [post.id]: post }, action));
    });
  });
});
Contact GitHub
