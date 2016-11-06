import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  return {
  viewedUsers: state.viewUsers[ownProps.routeParams.id],
  albums: state.albums.albums
}};

export default connect(
  mapStateToProps
)(User);
