import { connect } from 'react-redux';
import AlbumSearch from './search';

const mapStateToProps = (state) => ({
  albumSearch: state.albums.albumSearch
});

export default connect(
  mapStateToProps
)(AlbumSearch);
