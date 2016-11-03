import React from 'react';
import { Link } from 'react-router';
import { Dialog,
         FlatButton,
         RaisedButton,
         TextField } from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class SessionButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.session.currentUser){
      return (
        <div className="session">
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <RaisedButton
              label="logout"
              onClick={this.props.logout}
              />
          </MuiThemeProvider>
        </div>
      );
    } else {
      return (
        <div className="session">
          <Link to={'/login'}>
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <RaisedButton
                label="login"
                />
            </MuiThemeProvider>
          </Link>
        </div>
      );
    }
  }
}

export default SessionButton;
