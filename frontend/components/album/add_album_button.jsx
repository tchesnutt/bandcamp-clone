import React from 'react';
import { RaisedButton } from 'material-ui';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const AddAlbumButton = ({props}) => {
  return (
    <div className="session">
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <RaisedButton label="Add Album"
          onTouchTap={props.openAddAlbumModal}>
        </RaisedButton>
      </MuiThemeProvider>
    </div>
  );
};

export default AddAlbumButton;
