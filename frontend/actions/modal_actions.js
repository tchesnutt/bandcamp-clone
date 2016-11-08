export const OPEN_AUTH_MODAL = "OPEN_AUTH_MODAL";
export const CLOSE_AUTH_MODAL = "CLOSE_AUTH_MODAL";
export const OPEN_EDIT_USER_MODAL = "OPEN_EDIT_USER_MODAL";
export const CLOSE_EDIT_USER_MODAL = "CLOSE_EDIT_USER_MODAL";
export const OPEN_ADD_ALBUM_MODAL = "OPEN_ADD_ALBUM_MODAL";
export const CLOSE_ADD_ALBUM_MODAL = "CLOSE_ADD_ALBUM_MODAL";


export const openAuthModal = () => ( {
  type: OPEN_AUTH_MODAL
} );

export const closeAuthModal = () => ( {
  type: CLOSE_AUTH_MODAL
} );

export const openEditUserModal = () => ( {
  type: OPEN_EDIT_USER_MODAL
} );

export const closeEditUserModal = () => ( {
  type: CLOSE_EDIT_USER_MODAL
} );

export const openAddAlbumModal = () => ( {
  type: OPEN_ADD_ALBUM_MODAL
} );

export const closeAddAlbumModal = () => ( {
  type: CLOSE_ADD_ALBUM_MODAL
} );
