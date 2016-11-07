import {connect} from 'react-redux';
import AddAlbum from './add_album_form';
import { closeAddAlbumModal, openAddAlbumModal } from '../../actions/modal_actions';
import { createAlbum, updateAlbum } from '../../actions/album_actions';
import {fetchTracks} from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  addAlbumModal: state.modals.addAlbum,
  errors: state.albums.errors
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeAddAlbumModal: () => dispatch(closeAddAlbumModal()),
  openAddAlbumModal: () => dispatch(openAddAlbumModal()),
  addAlbum: (album) => dispatch(createAlbum(album)),
  updateAlbum: (album) => dispatch(updateAlbum(album))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAlbum);
