export const OPEN_AUTH_MODAL = "OPEN_AUTH_MODAL";
export const CLOSE_AUTH_MODAL = "CLOSE_AUTH_MODAL";
export const OPEN_USER_EDIT_MODAL = "OPEN_USER_EDIT_MODAL";
export const CLOSE_USER_EDIT_MODAL = "CLOSE_USER_EDIT_MODAL";
export const OPEN_ADD_ALBUM_MODAL = "OPEN_ADD_ALBUM_MODAL";
export const CLOSE_ADD_ALBUM_MODAL = "CLOSE_ADD_ALBUM_MODAL";


export const openAuthModal = () => ( {
  type: OPEN_AUTH_MODAL
} );

export const closeAuthModal = () => ( {
  type: CLOSE_AUTH_MODAL
} );

export const openUserEditModal = () => ( {
  type: OPEN_USER_MODAL
} );

export const closeUserEditModal = () => ( {
  type: CLOSE_USER_EDIT_MODAL
} );

export const openAddAlbumModal = () => ( {
  type: OPEN_ADD_ALBUM_MODAL
} );

export const closeAddAlbumModal = () => ( {
  type: CLOSE_ADD_ALBUM_MODAL
} );
