import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { withRouter, hashHistory } from 'react-router';



const Album = ({id, userId, title, coverUrl, createdAt}) => {
  let createDate;
  createDate = createdAt.split('-');

  const handleClick = url => () => hashHistory.push(url);

  return (
    <section className="album-card" onClick={handleClick(`/users/${userId}/albums/${id}`)}>
      <Card>
        <CardMedia>
          <img src={coverUrl} width={'400px'}/>
        </CardMedia>
        <CardTitle title={`${title}, ${createDate[0]}`} className="album-title-card"/>
      </Card>
    </section>
  )
}

export default withRouter(Album);
