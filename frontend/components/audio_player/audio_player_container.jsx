import { connect } from 'react-redux';
import AudioPlayer from './audio_player';

const mapStateToProps = ({tracks}) => {
  let currentTrackUrl;
  if (tracks.current_track) {
    currentTrackUrl = tracks.current_track.track_url;
  }
  return(
    {
    current_track: tracks.current_track,
    currentTrackUrl: currentTrackUrl,
    playing: tracks.playing
    }
  );
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioPlayer);
