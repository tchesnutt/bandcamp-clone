import React from 'react';
import { Link } from 'react-router';
import { Dialog, FlatButton, TextField } from 'material-ui';

class SessionButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.session.currentUser){
      return (
        <section className="session">
          <FlatButton
            label="logout"
            onClick={this.props.logout}
            />
        </section>
      );
    } else {
      return (
        <section className="session">
          <FlatButton label="login"
            onClick={this.props.openAuthModal}/>
        </section>
      );
    }
  }
}

export default SessionButton;
