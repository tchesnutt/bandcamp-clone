import React from 'react';
import ReactPlayer from 'react-player';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: this.props.currentSong,
      playing: this.props.playing
    };
    this.togglePlay = this.togglePlay.bind(this);
    this.renderPlayer = this.renderPlayer.bind(this);
    this.renderPlayPause = this.renderPlayPause.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
    this.appear = this.appear.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({currentSong: nextProps.currentSong, playing: nextProps.playing})
  }

  renderPlayer() {
    if (this.state.currentSong !== undefined){
      return (
        <ReactPlayer
          url={this.state.currentSong.track_url}
          playing={this.state.playing}
          hidden={true}
          onProgress={this.updatePlaybar}/>
      );
    } else {
      return (<section></section>);
    }
  }

  updatePlaybar({played}) {
    this.setState({progress: played * 100});
  }

  appear() {
    if(this.state.currentSong.cover_url === ""){
      return ( {opacity: 0} );
    } else {
      return ( {opacity: 1} );
    }
  }

  renderPlayPause() {
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

  togglePlay() {
    if(this.state.playing === true){
      this.props.receivePlaying(false);
      this.setState({playing: false});
    } else {
      this.props.receivePlaying(true);
      this.setState({playing: true});
    }
  }

  render() {
    if(this.state.currentSong !== undefined) {
      return (
        <section className="audio-player" style={this.appear()}>
          <section className='progress-bar'>
            <section className='audio-progress'
              style={{width: `${this.state.progress}%`}}>
            </section>
          </section>
          <section className='bottom-part-audio-player'>
            <span className="audio-buttons">
              {this.renderPlayPause()}
            </span>
            <h1 className="player-song-title">{this.props.currentSong.title}</h1>
          </section>
          {this.renderPlayer()}
        </section>
      );
    } else {
      return (
        <section></section>
      );
    }
  }
}

export default AudioPlayer;
