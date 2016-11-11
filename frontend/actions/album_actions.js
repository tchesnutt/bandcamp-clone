export const FETCH_ALBUM = "FETCH_ALBUM";
export const FETCH_ALBUMS = "FETCH_ALBUMS";
export const FETCH_ALL_ALBUMS = "FETCH_ALL_ALBUMS";
export const CREATE_ALBUM = "CREATE_ALBUM";
export const UPDATE_ALBUM = "UPDATE_ALBUM";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";

export const fetchAlbum = album_id => ( {
  type: FETCH_ALBUM,
  album_id
} );

export const fetchAlbums = user_id => ( {
  type: FETCH_ALBUMS,
  user_id
} );

export const fetchAllAlbums = () => ( {
  type: FETCH_ALL_ALBUMS
} );

export const createAlbum = album => ( {
  type: CREATE_ALBUM,
  album
} );

export const updateAlbum = album => ( {
  type: UPDATE_ALBUM,
  album
} );

export const receiveAlbum = album => ( {
  type: RECEIVE_ALBUM,
  album
} );

export const receiveAlbums = albums => ( {
  type: RECEIVE_ALBUMS,
  albums
} );

export const receiveAllAlbums = albums => ( {
  type: RECEIVE_ALL_ALBUMS,
  albums
} );

export const receiveAlbumErrors = error => ( {
  type: RECEIVE_ALBUM_ERRORS,
  error
} );
