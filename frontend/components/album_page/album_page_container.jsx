import { connect } from 'react-redux';
import AlbumPage from './album_page';
import { recieveTrack } from '../../actions/track_actions';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks.tracks,
  albums: state.albums.albums,
  viewedUser: state.viewUsers[ownProps.routeParams.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  recieveTrack: (track) => dispatch(recieveTrack(track))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
