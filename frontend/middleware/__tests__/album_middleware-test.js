import AlbumMiddleware from '../album_middleware';


describe('Middlewares', () => {
  describe('AlbumMiddlware', () => {
    let nextArgs, next, action;

    beforeEach(() => {
      next = jest.fn((...args) => {
        nextArgs = args;
      });
      action = { type: 'ACTION' };
    })

    it('should pass the action to next', () => {
      const middleware = AlbumMiddleware({});
      AlbumMiddleware({})(next)(action);
      expect(nextArgs[0]).toEqual(action);
    });

    it('should call next once', () => {
      const middleware = AlbumMiddleware({});
      AlbumMiddleware({})(next)(action);
      expect(nextArgs.length).toEqual(1);
    });

    describe('handling FETCH_ALBUM action', () => {
      
    });
  });
})
