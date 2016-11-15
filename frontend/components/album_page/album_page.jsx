import React from 'react';
import { Paper, Card, CardMedia, CardActions, FlatButton,  CardTitle, CardText, IconButton, red600, PlayArrow, lightGreenA700, FontIcon } from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Album from '../album/album';
import { hashHistory } from 'react-router';

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
    if (this.props.tracks.length > 0) {
      return(
        this.props.tracks.map( (track,idx) => (
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
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card containerStyle={cardStyle} initiallyExpanded={true}>
            <CardMedia className="user-profile-picture"><img src={this.props.viewedUser.profile_pic_url}/></CardMedia>
            <CardTitle title={this.props.viewedUser.username} subtitle={`Since: ${user_since[0]}`}/>
            <CardText>{this.props.viewedUser.description}</CardText>
            <CardActions>
            </CardActions>
          </Card>
        </MuiThemeProvider>
      )
    } else {
      return (
        <h1>G O T N O T H I N G</h1>
      )
    };
  }

  displayAlbumArt(){
    if (this.props.albums[0] !== undefined) {
      let displayAlbum = this.props.albums.filter((album) => (album.id == this.props.routeParams.albumId))
      console.log(this.props);
      console.log(displayAlbum);
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card initiallyExpanded={true} style={albumCardStyle}>
            <CardMedia className='album-art-album-page'>
              <img src={displayAlbum[0].cover_url}/>
            </CardMedia>
            <CardTitle title={displayAlbum[0].title}/>
            <CardText>{displayAlbum[0].description}</CardText>
          </Card>
        </MuiThemeProvider>
      )
    } else {
      return (
        <h1>G O T N O T H I N G</h1>
      )
    };
  }

  displayAlbums(){
    if(this.props.albums[0] !== undefined){
      let otherAlbums = this.props.albums.filter((track) => (track.id != this.props.routeParams.albumId))
      return(
        otherAlbums.map((album, idx) => (
          <li className='other-albums' key={idx}>
            <Album
            id={album.id}
            userId={album.user_id}
            title={album.title}
            coverUrl={album.cover_url}
            createdAt={album.created_at}
            userId={album.user_id}/></li>
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
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Paper style={cardStyle} zDepth={1}>
                <section className='track-list-flex'>
                  <h3 className='track-list-title'>Tracks</h3>
                  <ul>
                    {this.displayTracks()}
                  </ul>
                </section>
              </Paper>
            </MuiThemeProvider>
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
