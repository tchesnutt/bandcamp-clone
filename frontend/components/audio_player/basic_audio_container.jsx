import { connect } from 'react-redux';
import { receivePlaying } from '../../actions/tracks_actions';
import AudioPlayer from './basic_audio';

const mapStateToProps = state => ({
  currentTrack: state.track,
  playing: state.currentSong
});

const mapDispatchToProps = dispatch => ({
  receivePlaying: playing => dispatch(receivePlaying(playing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
