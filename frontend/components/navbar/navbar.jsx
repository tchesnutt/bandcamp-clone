import React from 'react';
import LogoButton from './logo_button';
import { Toolbar, ToolbarGroup, FlatButton, RaisedButton } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AddAlbumButton from '../album/add_album_button';
import AddAlbumFormContainer from '../album/add_album_form_container';
import SessionButtonContainer from './session_form/session_button_container';
import SessionFormContainer from './session_form/session_form_container';
import { hashHistory } from 'react-router';

const navbarStyle = {
  backgroundColor: '#651FFF'
}

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const handleClick = url => () => hashHistory.push(url);
    if(this.props.state.session.currentUser) {
      return(
        <section className='nav'>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Toolbar style={navbarStyle}>
              <ToolbarGroup>
                <AddAlbumButton props={this.props}/>
                <AddAlbumFormContainer/>
              </ToolbarGroup>
              <ToolbarGroup>
                <section className="session">
                  <RaisedButton label={this.props.state.session.currentUser.username} onTouchTap={handleClick(`/users/${this.props.state.session.currentUser.id}`)}/>
                </section>
                <SessionButtonContainer/>
                <SessionFormContainer/>
              </ToolbarGroup>
            </Toolbar>
          </MuiThemeProvider>
        </section>
      );
    } else {
      return(
        <section className='nav'>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Toolbar>
              <ToolbarGroup>
                <SessionButtonContainer/>
                <SessionFormContainer/>
              </ToolbarGroup>
            </Toolbar>
          </MuiThemeProvider>
        </section>
      );
    }
  }
};

export default NavBar;
