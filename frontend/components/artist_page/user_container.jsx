import { connect } from 'react-redux';
import User from './user';
import { openEditUserModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  return {
  viewedUsers: state.viewUsers[ownProps.routeParams.id],
  albums: state.albums.albums
}};

const mapDispatchToProps = (dispatch, ownProps) => ({
  openEditUserModal: () => dispatch(openEditUserModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
