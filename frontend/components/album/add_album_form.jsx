import React from 'react';
import {Dialog, FlatButton, RaisedButton, TextField, List, ListItem, Card, CardMedia, CardTitle, CardHeader, CardActions} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UploadButton from '../cloud';
import { merge } from 'lodash';
import FontIcon from 'material-ui/FontIcon';
import { red600 } from 'material-ui/styles/colors';
import { Delete, IconButton } from 'material-ui';


const submitButtonStyle = {
    width: '100%'
};

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'create',
      title: "",
      cover_url: "",
      description: "",
      tracks: [],
      trackChange: 0
    };
    this.track = {
      title: "",
      track_url: ""
    };
    if (this.props.albums.addAlbum.tracks !== undefined) {
      this.state.tracks = this.props.albums.addAlbum.tracks
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.trackUpdate = this.trackUpdate.bind(this);
    this.handleTrackSubmit = this.handleTrackSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.uploadSong = this.uploadSong.bind(this);
    this.handleDeleteTrack = this.handleDeleteTrack.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const album = this.state;
    this.state.formType === 'create' ? this.props.addAlbum(album) : this.props.updateAlbum(album);
  }

  handleTrackSubmit(e) {
    e.preventDefault();
    const track = this.track;
    this.state.tracks.push(track);
    let trackChanged = this.state.trackChange + 1;
    this.setState({trackChange: trackChanged});
    this.track = {
      title: "",
      track_url: ""
    };
  }

  update(field) {
    return e=> this.setState({[field]: e.currentTarget.value});
  }

  trackUpdate(field) {
    return e=> merge(this.track, {[field]: e.currentTarget.value});
  }

  handleDeleteTrack(e) {
    return idx => {
      let listOfTracks = this.state.tracks;
      listOfTracks.splice(idx, 1);
      this.setState({tracks: listOfTracks});
    }
  }

  deleteButton(idx) {
    return (
      <IconButton onTouchTap={idx => this.handleDeleteTrack(idx)}><Delete color={red600}/></IconButton>
    )
  }

  displayTracks() {
    let newTracks;
    newTracks = this.state.tracks;
    if(newTracks == undefined) {
      return( <h1>Upload Some Tracks</h1> )
    } else {
      return(
        <List>
          {newTracks.map((track, idx) => (
            <ListItem key={idx} primaryText={track.title} rightIconButton={this.deleteButton(idx)}/>
          ))}
        </List>
      );
    }
  }

  uploadImage(image) {
    this.setState({cover_url: image.url});
  }

  uploadSong(song) {
    merge(this.track, {track_url: song.url});
  }

  render() {
    return(
      <section className='add-album-form'>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog open={this.props.addAlbumModal}
                  onRequestClose={this.props.closeAddAlbumModal}
                  modal={false}
                  title='Create an Album'>
            <section className='album-form-container'>
            {this.displayTracks()}
            <form onSubmit={this.handleTrackSubmit}>
              <TextField type='text'
                         hintText='Add Track Title'
                         floatingLabelText='Track Title'
                         onChange={this.trackUpdate('title')}
                         fullWidth={true}
                         errorText={this.props.errors.title === undefined ? "" : `title ${this.props.errors.title.join(", ")}`}/>
              <UploadButton uploadImage={this.uploadSong}/>
              <FlatButton label="Submit Track" type='submit' style={submitButtonStyle} primary={true}/>
            </form>
            <form onSubmit={this.handleSubmit}>
              <TextField type='text'
                         hintText='Add Album Title'
                         floatingLabelText='Title'
                         fullWidth={true}
                         onChange={this.update("title")}
                         errorText={this.props.errors.title === undefined ? "" : `title ${this.props.errors.title.join(", ")}`}/>
              <br/>
              <TextField type='text'
                         rows={4}
                         rowsMax={8}
                         fullWidth={true}
                         multiLine={true}
                         onChange={this.update("description")}
                         hintText='Add Album Description'
                         floatingLabelText='Description'
                         errorText={this.props.errors.description === undefined ? "" : `description ${this.props.errors.description.join(", ")}`}/>
              <br/>
              <Card>
                <CardHeader title="Add Album Cover"
                            actAsExpander={true}
                            showExpandableButton={true}/>
                <CardMedia>
                </CardMedia>
                <CardActions>
                  <UploadButton uploadImage={this.uploadImage}/>
                </CardActions>
              </Card>
              <br/>
              <br/>
              <FlatButton label="Submit Album" type='submit' style={submitButtonStyle} primary={true}/>
            </form>
          </section>
          </Dialog>
        </MuiThemeProvider>
      </section>
    )
  }
}


export default AlbumForm;
