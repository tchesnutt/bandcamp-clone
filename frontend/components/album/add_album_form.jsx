import React from 'react';
import {Link, withRouter} from 'react-router';
import {Dialog, FlatButton, RaisedButton, TextField, List, ListItem, Card, CardMedia, CardTitle, CardHeader, CardActions} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import UploadButton from '../cloud'

const submitButtonStyle = {
    width: '50%'
};

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: 'create',
      title: "",
      coverUrl: "",
      description: "",
      tracks: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // TODO: handleSubmit, update, trackForm, display tracks

  handleSubmit(e) {
    e.preventDefault();
    const album = this.props.albums.addAlbum;
    this.state.formType === 'create' ? this.props.addAlbum(album) : this.props.updateAlbum(album);

  };

  update(field) {
    return e=> this.setState({[field]: e.currentTarget.value});
  };

  displayTracks() {
    let newTracks;
    newTracks = this.props.albums.addAlbum.tracks;
    if(newTracks == undefined) {
      return(
        <h1>Upload Some Tracks</h1>
      )
    } else {
      return(
        <List>
          {newTracks.map((track) => (
            <ListItem primaryText={track.title} rightIcon={<i class="material-icons red600">cancel</i>}/>
          ))}
        </List>
      );
    }
  };

  render() {
    return(
      <div className='add-album-form'>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Dialog open={this.props.addAlbumModal}
                  onRequestClose={this.props.closeAddAlbumModal}
                  modal={false}
                  title='Gib Musics'>
                  <div className='album-form-container'>
                    <form onSubmit={this.handleSubmit}>
                      <TextField type='text'
                                 hintText='Add Album Title'
                                 floatingLabelText='Title'
                                 fullWidth={true}
                                 errorText={this.props.errors.title === undefined ? "" : `title ${this.props.errors.title.join(", ")}`}/>
                               <br/>
                      <TextField type='text'
                                 rows={4}
                                 rowsMax={8}
                                 fullWidth={true}
                                 multiLine={true}
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
                          <UploadButton postImage={this.props.albums.addAlbum.cover_url}/>
                        </CardActions>
                      </Card>
                      <br/>
                      {this.displayTracks()}
                      <br/>
                      <FlatButton label="Submit" type='submit' style={submitButtonStyle} primary={true}/>
                    </form>
                  </div>
          </Dialog>
        </MuiThemeProvider>
      </div>
    )
  }
}


export default AlbumForm;
