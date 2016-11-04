import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './navbar/session_form/session_form_container';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <NavBarContainer/>
        <SessionFormContainer/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
