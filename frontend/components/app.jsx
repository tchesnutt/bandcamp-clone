import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import sessionFormContainer from './navbar/session_form/session_form_container';
import { Router, Route, Link, browserHistory } from 'react-router'



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <session>
        <session>
          <NavBarContainer/>
          <sessionFormContainer/>
        </session>
        {this.props.children}
      </session>
    );
  }
}

export default App;
