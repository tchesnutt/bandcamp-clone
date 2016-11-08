import React from 'react';
import { RaisedButton } from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class EditUserButton extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="session">
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <RaisedButton label="Edit User"
            onTouchTap={this.props.openEditUserModal}>
          </RaisedButton>
        </MuiThemeProvider>
      </div>
    );
  }
};

export default EditUserButton;
