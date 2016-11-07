import React from 'react';
import LogoButton from './logo_button';
import SessionButtonContainer from './session_form/session_button_container';
import AddAlbumButton from '../album/add_album_button';
import AddAlbumFormContainer from '../album/add_album_form_container';
import { AppBar, FlatButton, RaisedButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import SessionFormContainer from './session_form/session_form_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    if(this.props.state.session.currentUser) {
      return(
        <div className='nav'>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <AppBar
              className='nav'
              title="Sandcamp"
              titleStyle={{fontFamily: 'Titillium Web'}}
              showMenuIconButton={false}
              >
              <AddAlbumButton props={this.props}/>
              <AddAlbumFormContainer/>
              <div className="session">
                <RaisedButton label={this.props.state.session.currentUser.username} />
              </div>
              <SessionButtonContainer />
              <SessionFormContainer />
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
