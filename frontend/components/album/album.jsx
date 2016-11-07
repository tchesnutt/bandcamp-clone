import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import { withRouter } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { hashHistory } from 'react-router';



const Album = ({id, userId, title, coverUrl, createdAt}) => {
  let createDate;
  createDate = createdAt.split('-');

  const handleClick = url => () => hashHistory.push(url);

  return (
    <div className="album-card">
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Card>
          <CardMedia>
            <img src={coverUrl} width={'400px'}/>
          </CardMedia>
          <CardTitle title={`${title}, ${createDate[0]}`} className="album-title-card" onTouchTap={handleClick(`/users/${userId}/albums/${id}`)}/>
        </Card>
      </MuiThemeProvider>
    </div>
  )
}

export default withRouter(Album);
