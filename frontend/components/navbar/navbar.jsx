import React from 'react';
import LogoButton from './logo_button';
import SessionButtonContainer from './session_form/session_button_container';
import { AppBar, FlatButton, RaisedButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
// TODO: make clicking name to go userpage

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.currentUser) {
      return(
        <div className='nav'>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <AppBar
              className='nav'
              title="Sandcamp"
              titleStyle={{fontFamily: 'Titillium Web'}}
              showMenuIconButton={false}
              >
              <div className="session">
                <RaisedButton label={this.props.currentUser.username} />
              </div>
              <SessionButtonContainer />
            </AppBar>
          </MuiThemeProvider>
        </div>
      );
    } else {
      return(
        <div className='nav'>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <AppBar
              className='nav'
              title="Sandcamp"
              titleStyle={{fontFamily: 'Titillium Web'}}
              showMenuIconButton={false}
              >
              <SessionButtonContainer />
            </AppBar>
          </MuiThemeProvider>
        </div>
      );
    }
  }
};

export default NavBar;
