import React from 'react';
import { RaisedButton } from 'material-ui';
import { hashHistory } from 'react-router';

class EditUserButton extends React.Component {
  constructor(props){
    super(props);
    this.loggedIn = props.session.currentUser || 0
  }

  render() {
    let url = hashHistory.getCurrentLocation().pathname.split("/");
    let pageId = url[url.length - 1];
    if (this.loggedIn.id == pageId) {
      return (
        <section className="session">
          <RaisedButton label="Edit User"
            onTouchTap={this.props.openEditUserModal}>
          </RaisedButton>
        </section>
      );
    } else {
      return (
        <section className='session'>
        </section>
      )
    };
  }
};

export default EditUserButton;
