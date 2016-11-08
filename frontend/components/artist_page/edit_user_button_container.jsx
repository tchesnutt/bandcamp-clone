import { connect } from 'react-redux';
import EditUserButton from './edit_user_button';
import { openEditUserModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  session: state.session
});

const mapDispatchToProps = dispatch => ({
  openEditUserModal: () => dispatch(openEditUserModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserButton);
