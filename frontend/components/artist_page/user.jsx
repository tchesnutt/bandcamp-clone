import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.since = ""
  }

  render() {
    let since;
    if (this.props.viewedUsers !== undefined) {
      this.state = this.props.viewedUsers;
      this.since = this.props.viewedUsers.updated_at.split("-");
      console.log(this.since);
    }
    return (
      <div className="user-page" >

        <div className="user-discography">
        </div>
        <div className="user-sidebar">
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Card initiallyExpanded={true}>
              <CardMedia><img src={this.state.profile_pic_url}/></CardMedia>
              <CardTitle title={this.state.username} subtitle={`Since: ${this.since[0]}`}/>
              <CardText>{this.state.description}</CardText>
            </Card>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
};

export default UserDetail;
