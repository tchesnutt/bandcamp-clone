import React from 'react';
import ReactPlayer from 'react-player';

class AudioPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTrack: this.props.currentTrack,
      playing: this.props.playing.playing
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.renderPlayer = this.renderPlayer.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
    this.appear = this.appear.bind(this);
  }

  renderPlayer(){
    if (this.state.currentTrack){
      return (
        <ReactPlayer
          url={this.state.currentTrack.cover_url}
          playing={this.state.playing}
          hidden={true}
          onProgress={this.updatePlaybar}/>
      );
    } else {
      return (<section></section>);
    }
  }

  updatePlaybar({played}){
    this.setState({progress: played * 100});
  }

  appear(){
    if(this.state.currentTrack.title !== ""){
      return (
        {opacity: 1}
      );
    } else {
      return (
        {opacity: 1}
      );
    }
  }

  renderPlayPause(){
   if(this.state.playing === false){
     return (
       <img onTouchTap={this.togglePlay} src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png" className="play-button"/>
     );
   } else {
     return (
       <img onTouchTap={this.togglePlay} src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-square/512/Button_4-512.png" className="play-button"/>
     );
   }
 }

  togglePlay(){
    if(this.state.playing === true){
      this.props.receivePlaying(false);
      this.setState({playing: false});
    } else {
      this.props.receivePlaying(true);
      this.setState({playing: true});
    }
  }

  render(){
    return (
      <section className="audio-player" style={this.appear()}>
        <span className="audio-buttons">
          {this.renderPlayPause()}
          <img src={this.props.currentTrack.cover_url} className="playback-cover"/>
          <h1 className="player-song-title">{this.props.currentTrack.title}</h1>
        </span>
        <section className='progress-bar'>
          <section className='audio-progress'
            style={{width: `${this.state.progress}%`}}>
          </section>
          <section className='progress-circle'
            style={{left: `${this.state.progress - 8}px`}}>
          </section>
        </section>
        {this.renderPlayer()}
      </section>
    );
  }
}

export default AudioPlayer;
