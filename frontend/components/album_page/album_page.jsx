import React from 'react';
import { Paper, Card, CardMedia, CardTitle, CardText, IconButton, red600, PlayArrow, lightGreenA700, FontIcon } from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);

    this.displayTracks = this.displayTracks.bind(this);
    this.displayArtist = this.displayArtist.bind(this);
  }

  handleToPlayer(url) {

  }

  displayTracks(){
    if (this.props.tracks.length > 0) {
      return(
        this.props.tracks.map( (track,idx) => (
          <li key={idx}>
            <IconButton
              onTouchTap={this.handleToPlayer(track.track_url)}>
              <FontIcon className="material-icons" color={lightGreenA700}>play_arrow</FontIcon>
            </IconButton>
            <h4 className='track-number'>{track.track_number}</h4>
            <h4 className='track-title'>{track.title}</h4>
          </li>
        )));
    } else {
      return (
        <i className="material-icons">play_arrow</i>
      );
    }
  }

  displayArtist(){
    if (this.props.viewedUser !== undefined) {
      let user_since = this.props.viewedUser.created_at.split("-");
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Card initiallyExpanded={true}>
            <CardMedia className="user-profile-picture"><img src={this.props.viewedUser.profile_pic_url}/></CardMedia>
            <CardTitle title={this.props.viewedUser.username} subtitle={`Since: ${user_since[0]}`}/>
            <CardText>{this.props.viewedUser.description}</CardText>
          </Card>
        </MuiThemeProvider>
      )
    } else {
      return (
        <h1>L O A D I N G</h1>
      )
    };
  }


  render() {

    return(
        <section className='whole-album-page'>
          <section className='track-list'>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Paper zDepth={1}>
                <ul>
                  {this.displayTracks()}
                </ul>
              </Paper>
            </MuiThemeProvider>
          </section>
          <section className='album-cover'>
            {this.displayArtist()}
          </section>
          <section className="artist-info-album-page">
          </section>
      </section>
    )
  }
}


export default AlbumPage;
