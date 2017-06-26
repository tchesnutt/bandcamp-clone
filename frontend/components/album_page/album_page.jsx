import React from 'react';
import { hashHistory } from 'react-router';
import { Paper, Card, CardMedia, CardActions, FlatButton,  CardTitle, CardText, IconButton, red600, PlayArrow, lightGreenA700, FontIcon } from 'material-ui';
import Album from '../album/album';

const cardStyle = {
  width: '350px',
  height: '468px'
};

const cardTrackStyle = {
  width: '350px',
  height: 'auto'
};

const albumCardStyle = {
  width: '400px',
  height: 'auto',
};

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
    this.displayTracks = this.displayTracks.bind(this);
    this.displayArtist = this.displayArtist.bind(this);
    this.displayAlbumArt = this.displayAlbumArt.bind(this);
    this.displayAlbums = this.displayAlbums.bind(this);
    this.handleGoto = this.handleGoto.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
  }

  handleToPlayer(track) {
    if(this.props.playing && track.id === this.props.currentSongId){
      return e => (this.props.togglePlaying());
    } else if (this.props.playing && track.id !== this.props.currentSongId) {
       return e => (this.props.receiveSong(track));
    } else {
      return e => {
        this.props.receiveSong(track)
        this.props.togglePlaying()
      }
    }
  }

  playOrPause(trackId) {
    if(trackId === this.props.currentSongId && this.props.playing){
      return('pause')
    } else {
      return('play_arrow')
    }
  }

  displayTracks(){
    let displayTracksObj = {};
    let displayTracksArray = [];
    if (this.props.tracks.length > 0) {
      this.props.tracks.forEach((track) =>{
        displayTracksObj[track.track_number] = track
      });
      displayTracksArray = Object.keys(displayTracksObj).map((tr) => displayTracksObj[tr])
      return(
        displayTracksArray.map( (track,idx) => (
          <li key={idx} className="track-element">
            <IconButton style={{color: '#12c1d7'}}>
              <FontIcon className="material-icons" onTouchTap={this.handleToPlayer(track)}>{this.playOrPause(track.id)}</FontIcon>
            </IconButton>
            <h4 className='track-number'>{track.track_number}.</h4>
            <h4 className='track-name' onClick={this.handleToPlayer(track)}> {track.title}</h4>
          </li>
        )));
    } else {
      return (
        <h1>G O T N O T H I N G</h1>
      );
    }
  }

  handleGoto(url){
    hashHistory.push(url)
  }

  displayArtist(){
    if (this.props.viewedUser !== undefined) {
      let user_since = this.props.viewedUser.created_at.split("-");
      return (
        <section className='right-side-album-page'>
          <h1 className='list-title'>Artist</h1>
          <Card containerStyle={cardStyle} initiallyExpanded={true} onClick={() => (this.handleGoto(`/users/${this.props.params.id}`))}>
            <CardMedia className="user-profile-picture"><img src={this.props.viewedUser.profile_pic_url}/></CardMedia>
            <CardTitle title={this.props.viewedUser.username} subtitle={`Since: ${user_since[0]}`} className='artist-title-album-page'/>
            <CardText>{this.props.viewedUser.description}</CardText>
          </Card>
        </section>
      )
    } else {
      return (
        <h1>G O T N O T H I N G</h1>
      )
    };
  }

  displayAlbumArt(){
    if (this.props.viewedUser !== undefined) {
      if(this.props.albums[this.props.params.albumId] !== undefined) {
        let albums = Object.entries(this.props.albums);
        let displayAlbum = albums.filter((album) => (album[0] == this.props.routeParams.albumId));
        if(displayAlbum.length !== 0){
          return (
            <section className='album-art-album-page'>
              <h1 className='list-title'>Album</h1>
              <Album
                containerStyle={albumCardStyle}
                id={displayAlbum[0][1].id}
                userId={displayAlbum[0][1].user_id}
                title={displayAlbum[0][1].title}
                coverUrl={displayAlbum[0][1].cover_url}
                createdAt={displayAlbum[0][1].created_at}
                userId={displayAlbum[0][1].user_id}/>
            </section>
          )
        }
      }
    } else {
      return (
        <h1>G O T N O T H I N G</h1>
      )
    };
  }

  displayAlbums(){
    if(this.props.albums[this.props.params.albumId] !== undefined){
      let albums = Object.entries(this.props.albums);
      let otherAlbums = albums.filter((album) => (album[0] != this.props.routeParams.albumId && album[1].user_id === parseInt(this.props.routeParams.id)));
      return(
        otherAlbums.map((album, idx) => (
          <li className='other-albums' key={idx}>
            <Album
            id={album[1].id}
            userId={album[1].user_id}
            title={album[1].title}
            coverUrl={album[1].cover_url}
            createdAt={album[1].created_at}
            userId={album[1].user_id}/>
          </li>
        ))
      )
    } else {
      return (
        <h4>No other albums :(</h4>
      )
    }
  }


  render() {
    return(
        <section className='whole-album-page'>
          <section className='track-list'>
            <h1 className='list-title'>Tracks</h1>
            <Paper style={cardTrackStyle} zDepth={1}>
              <section className='track-list-flex'>
                <ul>
                  {this.displayTracks()}
                </ul>
              </section>
            </Paper>
          </section>
          <section className='album-cover'>
            {this.displayAlbumArt()}
          </section>
          <section className="artist-info-album-page">
            {this.displayArtist()}
          </section>
      </section>
    )
  }
}


export default AlbumPage;
