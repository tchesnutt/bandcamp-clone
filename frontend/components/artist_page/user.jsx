import React from 'react';
import { CSSGrid, measureItems, makeResponsive, layout} from 'react-stonecutter';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, Paper} from 'material-ui';
import Album from '../album/album';
import EditUserButtonContainer from './edit_user_button_container';
import EditUserFormContainer from './edit_user_form_container';


class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.user = {};
    this.albums = [];
    this.user_since = "";
    let artistId;
    artistId = 1;
  }

  handleAlbums() {
    if (this.albums.length > 0) {
      return(
        this.albums.map((album, idx) => (
          <li key={idx} className="album-element">
            <Album
            id={album.id}
            userId={album.user_id}
            title={album.title}
            coverUrl={album.cover_url}
            createdAt={album.created_at}
            userId={album.user_id}/></li>
        ))
      );
    } else {
      return(
        <h1>No Albums</h1>
      );
    }
  }

  render() {
    if (this.props.viewedUsers !== undefined) {
      this.user = this.props.viewedUsers;
      this.albums = this.props.albums;
      this.user_since = this.props.viewedUsers.created_at.split("-");
    };
    const Grid = makeResponsive(measureItems(CSSGrid), {
      maxWidth: 1920,
      minPadding: 100,
      measureImages: true
    });

    return (
      <section className="user-page" >
          <section className="user-sidebar">
            <Card initiallyExpanded={true}>
              <CardMedia className="user-profile-picture"><img src={this.user.profile_pic_url}/></CardMedia>
              <CardTitle title={this.user.username} subtitle={`Since: ${this.user_since[0]}`}/>
              <CardText>{this.user.description}</CardText>
              <EditUserButtonContainer />
              <EditUserFormContainer />
            </Card>
          </section>
          <section className="user-discography">
            <Grid
              component="ul"
              columns={4}
              columnWidth={400}
              itemHeight={400}
              gutterWidth={5}
              gutterHeight={5}
              duration={800}
              easing="ease-out">
              {this.handleAlbums()}
            </Grid>
          </section>
      </section>
    )
  }
};

export default UserDetail;
