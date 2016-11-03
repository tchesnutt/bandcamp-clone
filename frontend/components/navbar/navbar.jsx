import React from 'react';
import LogoButton from './logo_button';
import SessionButtonContainer from './session_form/session_button_container';
import { AppBar, FlatButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


const NavBar = ({currentUser, logout, handleOpen}) => {
  console.log(currentUser);

  return(
    <div className='nav'>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <AppBar
          className='nav'
          title="Sandcamp"
          titleStyle={{fontFamily: 'Titillium Web'}}
          showMenuIconButton={false}
          onTitleTouchTap={}
          >
          <SessionButtonContainer />
        </AppBar>

      </MuiThemeProvider>
    </div>
  )
};

export default NavBar;
