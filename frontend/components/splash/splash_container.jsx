import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = state => ({
  albums: state.albums.albumSearch
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
