import { connect } from 'react-redux';
import AlbumPage from './album_page';
import { receivePlaying, receiveSong } from '../../actions/tracks_actions';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
  tracks: state.tracks.tracks,
  albums: state.albums.albums,
  viewedUser: state.viewUsers[ownProps.routeParams.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  receivePlaying: () => dispatch(receivePlaying()),
  receiveSong: (track) => dispatch(receiveSong(track))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage);
