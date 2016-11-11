import { connect } from 'react-redux';
import { receivePlaying } from '../../actions/tracks_actions';
import AudioPlayer from './basic_audio';

const mapStateToProps = state => ({
  currentSong: state.currentSong,
  playing: state.playing.playing
});

const mapDispatchToProps = dispatch => ({
  receivePlaying: playing => dispatch(receivePlaying(playing))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
