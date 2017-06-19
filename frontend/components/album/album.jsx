import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { withRouter, hashHistory } from 'react-router';



const Album = ({id, userId, title, coverUrl, createdAt, containerStyle, artistName, titleStyle, subtitleStyle}) => {
  let createDate;
  createDate = createdAt.split('-');

  const handleClick = url => () => hashHistory.push(url);

  return (
    <section className="album-card" onClick={handleClick(`/users/${userId}/albums/${id}`)}>
      <Card style={containerStyle}>
        <CardMedia>
          <img src={coverUrl} width={'100%'}/>
        </CardMedia>
        <CardTitle
          title={`${title}, ${createDate[0]}`}
          titleStyle={titleStyle}
          subtitle={artistName}
          subtitleStyle={subtitleStyle}
          className="album-title-card"/>
      </Card>
    </section>
  )
}

export default withRouter(Album);
