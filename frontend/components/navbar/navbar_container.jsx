import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import {openAuthModal, openAddAlbumModal} from '../../actions/modal_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openAuthModal: () => dispatch(openAuthModal()),
    openAddAlbumModal: () => dispatch(openAddAlbumModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
