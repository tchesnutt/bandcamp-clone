import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import {openAuthModal} from '../../actions/modal_actions';
import Navbar from './navbar';

const mapStateToProps = ({session}) => ({currentUser: session.currentUser});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openAuthModal: () => dispatch(openAuthModal)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
