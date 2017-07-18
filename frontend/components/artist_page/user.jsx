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
    this.user_since = "";
    let artistId;
    artistId = 1;
  }

  handleAlbums() {
    if (Object.keys(this.props.albums).length > 0) {
      return(
        Object.keys(this.props.albums).map( (key, idx) => {
          let album = this.props.albums[key]
          return(
            <li key={idx} className="album-element">
              <Album
                id={album.id}
                userId={album.user_id}
                title={album.title}
                coverUrl={album.cover_url}
                createdAt={album.created_at}
                userId={album.user_id}/></li>
            )
          }
        )
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
    console.log(this.props);
    console.log(this.user);
    return (
      <section className="user-page" >
          <section className="user-sidebar">
            <h1 className='list-title'>Artist</h1>
            <Card initiallyExpanded={true}>
              <CardMedia className="user-profile-picture"><img src={this.user.profile_pic_url}/></CardMedia>
              <CardTitle title={this.user.username} subtitle={`Since: ${this.user_since[0]}`}/>
              <CardText>{this.user.description}</CardText>
              <EditUserButtonContainer />
              <EditUserFormContainer />
            </Card>
          </section>
          <section className="user-discography">
            <h1 className='list-title'>Discography</h1>
            <Grid
              component="ul"
              columns={3}
              columnWidth={400}
              itemHeight={400}
              gutterWidth={20}
              gutterHeight={20}
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
