import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Album from '../album/album';
// TODO: picture transformation on cloudinary side or scss solution

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  }
};

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.user = {}
    this.albums = []
    this.user_since = ""
    this.album_creation = ""
  }
  render() {
    if (this.props.viewedUsers !== undefined) {
      this.user = this.props.viewedUsers;
      this.albums = this.props.albums;
      this.user_since = this.props.viewedUsers.updated_at.split("-");
    }
    let discography
    if (this.albums.length > 0) {
      discography = <Album key="1" albums={this.albums}/>;
    } else {
      discography = <h1>Loading</h1>;
    }
    return (
      <div className="user-page" >
        <div className="user-discography">
          {discography}
        </div>
          <div className="user-sidebar">
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <Card initiallyExpanded={true}>
                <CardMedia className="user-profile-picture"><img src={this.user.profile_pic_url}/></CardMedia>
                <CardTitle title={this.user.username} subtitle={`Since: ${this.user_since[0]}`}/>
                <CardText>{this.user.description}</CardText>
              </Card>
            </MuiThemeProvider>
          </div>
      </div>
    )
  }
};

export default UserDetail;
