import React from 'react';
import { hashHistory } from 'react-router';
import { Paper, Card, CardMedia, CardActions, FlatButton,  CardTitle, CardText, IconButton, red600, PlayArrow, lightGreenA700, FontIcon } from 'material-ui';
import Album from '../album/album';

const cardStyle = {
  width: '300px',
  height: 'auto',
};

const albumCardStyle = {
  width: '400px',
  height: 'auto',
  margin: '20px'
};

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
    this.displayTracks = this.displayTracks.bind(this);
    this.displayArtist = this.displayArtist.bind(this);
    this.displayAlbumArt = this.displayAlbumArt.bind(this);
    this.displayAlbums = this.displayAlbums.bind(this);
    this.handleGoto = this.handleGoto.bind(this);
  }

  handleToPlayer(track) {
    return e =>{
      this.props.receiveSong(track)
      this.props.receivePlaying();
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
            <IconButton
              onTouchTap={this.handleToPlayer(track)}>
              <FontIcon className="material-icons" color={lightGreenA700}>play_arrow</FontIcon>
            </IconButton>
            <h4 className='track-number'>{track.track_number}.  {track.title}</h4>
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
        <Card containerStyle={cardStyle} initiallyExpanded={true}>
          <CardMedia className="user-profile-picture"><img src={this.props.viewedUser.profile_pic_url}/></CardMedia>
          <CardTitle title={this.props.viewedUser.username} subtitle={`Since: ${user_since[0]}`}/>
          <CardText>{this.props.viewedUser.description}</CardText>
          <CardActions>
          </CardActions>
        </Card>
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
              <Album
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
        <section/>
      )
    }
  }


  render() {
    return(
        <section className='whole-album-page'>
          <section className='track-list'>
            <Paper style={cardStyle} zDepth={1}>
              <section className='track-list-flex'>
                <h3 className='track-list-title'>Tracks</h3>
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
            <ul className='other-albums'>
              {this.displayAlbums()}
            </ul>
          </section>
      </section>
    )
  }
}


export default AlbumPage;
