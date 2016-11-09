import { connect } from 'react-redux';
import { receivePlaying } from '../../actions/tracks_actions';
import AudioPlayer from './audio_player';

const mapStateToProps = state => ({
  currentTrack: state.currentTrack,
  playing: state.playback.playing,
});

const mapDispatchToProps = dispatch => ({
  receivePlaying: playing => dispatch(receivePlaying(playing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
