import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  return {
  viewedUsers: state.viewUsers[ownProps.routeParams.id]
}};

export default connect(
  mapStateToProps
)(User);
