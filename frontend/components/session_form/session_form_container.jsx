import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ( state, ownProps ) => ({
  loggedIn: state.session.currentUser ? true : false,
  formType: ownProps.location.pathname.includes('login') ? 'login' : 'signup',
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const processForm = (formType === 'login') ? login : signup;
  return {
    login: user => dispatch(processForm(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
