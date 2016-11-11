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
import SearchContainer from './search_container';

const navbarStyle = {
  backgroundColor: '#FF3D00',
  width: '100%'
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
                <section className="logo-area">
                  <h1>S A N D C A M P</h1>
                </section>
              </ToolbarGroup>
              <ToolbarGroup>
                <SearchContainer/>
              </ToolbarGroup>
              <ToolbarGroup>
                <section className="right-nav-bar">
                  <AddAlbumButton props={this.props}/>
                  <AddAlbumFormContainer/>
                </section>
                <section className="right-nav-bar">
                  <RaisedButton label={this.props.state.session.currentUser.username} onTouchTap={handleClick(`/users/${this.props.state.session.currentUser.id}`)}/>
                </section>
                <section className="right-nav-bar">
                  <SessionButtonContainer/>
                  <SessionFormContainer/>
                </section>
              </ToolbarGroup>
            </Toolbar>
          </MuiThemeProvider>
        </section>
      );
    } else {
      return(
        <section className='nav'>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Toolbar style={navbarStyle}>
              <ToolbarGroup>
                <section className="right-nav-bar">
                  <SessionButtonContainer/>
                  <SessionFormContainer/>
                </section>
              </ToolbarGroup>
            </Toolbar>
          </MuiThemeProvider>
        </section>
      );
    }
  }
};

export default NavBar;
