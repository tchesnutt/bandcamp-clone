import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './navbar/session_form/session_form_container';
import { Router, Route, Link, browserHistory } from 'react-router'



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <NavBarContainer/>
          <SessionFormContainer/>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
