import { connect } from 'react-redux';
import EditUserForm from './edit_user_form';
import { updateUser } from '../../actions/user_actions';
import { closeEditUserModal, openEditUserModal } from '../../actions/modal_actions';
import { fetchTracks } from '../../actions/tracks_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  editUserModal: state.modals.editUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  closeEditUserModal: () => dispatch(closeEditUserModal()),
  openEditUserModal: () => dispatch(openEditUserModal()),
  updateUser: (user) => dispatch(updateUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserForm);
