import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { closeAuthModal, openAuthModal } from '../../../actions/modal_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors,
    authModalOpen: state.modals.auth
  })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  closeAuthModal: () => dispatch(closeAuthModal())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
