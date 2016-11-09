import React from 'react';
import ReactPlayer from 'react-player';

class AudioPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTrack: this.props.currentTrack,
      playing: this.props.playing
    };
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(){
    if(this.props.playing === true){
      this.props.receivePlaying(false);
      this.setState({playing: false});
    } else {
      this.props.receivePlaying(true);
      this.setState({playing: true});
    }
  }

  render(){
    return (
      <div className="audio-player">
        <span className="audio-buttons">
          <img onClick={this.togglePlay} src="https://image.freepik.com/free-icon/play-button_318-42541.jpg" className="play-button"/>
          <img src={this.props.currentTrack.cover_url} className="playback-cover"/>
          <h1 className="player-song-title">{this.props.currentTrack.title}</h1>
        </span>
        <ReactPlayer url={this.props.currentTrack.track_url} playing={this.props.playing} hidden={true}/>
      </div>
    );
  }
}

export default AudioPlayer;
