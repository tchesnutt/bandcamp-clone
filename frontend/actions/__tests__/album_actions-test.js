import * as actions from '../album_actions'

describe('actions', () => {
  it('should create an action to fetch album by album id', () => {
    const album_id = 1;
    const expectedAction = {
      type: actions.FETCH_ALBUM,
      album_id
    };
    expect(actions.fetchAlbum(album_id)).toEqual(expectedAction);
  });

  it('should create an action to fetch all albums by user id', () => {
    const user_id = 1;
    const expectedAction = {
      type: actions.FETCH_ALBUMS,
      user_id
    };
    expect(actions.fetchAlbums(user_id)).toEqual(expectedAction);
  });

  it('should create an action to fetch all albums', () => {
    const expectedAction = {
      type: actions.FETCH_ALL_ALBUMS,
    };
    expect(actions.fetchAllAlbums()).toEqual(expectedAction);
  });

  it('should create an action to fetch all albums', () => {
    const expectedAction = {
      type: actions.FETCH_ALBUM_ART,
    };
    expect(actions.fetchAlbumArt()).toEqual(expectedAction);
  });

  it('should create an action to create an album', () => {
    const album = { info: 'blah blah' };
    const expectedAction = {
      type: actions.CREATE_ALBUM,
      album
    };
    expect(actions.createAlbum(album)).toEqual(expectedAction);
  });

  it('should create an action to update an album', () => {
    const album = { info: 'blah blah' };
    const expectedAction = {
      type: actions.UPDATE_ALBUM,
      album
    };
    expect(actions.updateAlbum(album)).toEqual(expectedAction);
  });

  it('should create an action to reveive albums', () => {
    const albums = { info: 'blah blah' };
    const expectedAction = {
      type: actions.RECEIVE_ALBUMS,
      albums
    };
    expect(actions.receiveAlbums(albums)).toEqual(expectedAction);
  });

  it('should create an action to reveive all ablums', () => {
    const albums = { info: 'blah blah' };
    const expectedAction = {
      type: actions.RECEIVE_ALL_ALBUMS,
      albums
    };
    expect(actions.receiveAllAlbums(albums)).toEqual(expectedAction);
  });

  it('should create an action to reveive album art', () => {
    const albums = { info: 'blah blah' };
    const expectedAction = {
      type: actions.RECEIVE_ALBUM_ART,
      albums
    };
    expect(actions.receiveAlbumArt(albums)).toEqual(expectedAction);
  });

  it('should create an action to reveive album errors', () => {
    const error = { info: 'blah blah' };
    const expectedAction = {
      type: actions.RECEIVE_ALBUM_ERRORS,
      error
    };
    expect(actions.receiveAlbumErrors(error)).toEqual(expectedAction);
  });
})
