import React from 'react';
import { hashHistory, Link } from 'react-router';
import { Toolbar, ToolbarGroup, FlatButton } from 'material-ui';
import LogoButton from './logo_button';
import AddAlbumButton from '../album/add_album_button';
import AddAlbumFormContainer from '../album/add_album_form_container';
import SessionButtonContainer from './session_form/session_button_container';
import SessionFormContainer from './session_form/session_form_container';
import SearchContainer from './search_container';

const navbarStyle = {
  backgroundColor: '#FFFFFF',
  width: '100%',
  accentColor1: '#639aa9'
}

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(url) {
    if(hashHistory.getCurrentLocation().pathname !== url){
      hashHistory.push(url);
    }
  }

  render(){
    if(this.props.state.session.currentUser) {
      return(
        <section className='nav'>
          <Toolbar style={navbarStyle}>
            <ToolbarGroup>
              <section className="logo-area">
                  <div className="logo" onClick={() => this.handleClick("/")}/>
                  <h1 onClick={() => this.handleClick("/")}>S A N D C A M P</h1>
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
                <FlatButton label={this.props.state.session.currentUser.username} onTouchTap={() => this.handleClick(`/users/${this.props.state.session.currentUser.id}`)}/>
              </section>
              <section className="right-nav-bar">
                <SessionButtonContainer/>
                <SessionFormContainer/>
              </section>
            </ToolbarGroup>
          </Toolbar>
        </section>
      );
    } else {
      return(
        <section className='nav-logged-out'>
          <Toolbar style={navbarStyle}>
            <ToolbarGroup>
              <section className="logo-area">
                  <div className="logo"/>
                  <h1 onClick={() => this.handleClick("/")}>S A N D C A M P</h1>
              </section>
            </ToolbarGroup>
            <ToolbarGroup>
              <SearchContainer/>
            </ToolbarGroup>
            <ToolbarGroup>
              <section className="right-nav-bar">
                <SessionButtonContainer/>
                <SessionFormContainer/>
              </section>
            </ToolbarGroup>
          </Toolbar>
        </section>
      );
    }
  }
};

export default NavBar;
