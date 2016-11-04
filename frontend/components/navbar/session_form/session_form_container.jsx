import { connect } from 'react-redux';
import { login, logout, signup } from '../../../actions/session_actions';
import { closeAuthModal } from '../../../actions/modal_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.session.currentUser ? true : false,
  formType: getFormType(ownProps),
  errors: state.session.errors,
  authModalOpen: state.modals.auth
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: processForm(dispatch, ownProps),
  login: user => dispatch(login(user)),
  closeAuthModal: () => dispatch(closeAuthModal())
});

const processForm = (dispatch, ownProps)  => {
  if (getFormType(ownProps) === 'login'){
    return user => dispatch(login(user));
  } else {
    return user => dispatch(signup(user));
  }
};

const getFormType = (ownProps) => (
  ownProps.location.pathname.includes('login') ? 'login' : 'signup'
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
