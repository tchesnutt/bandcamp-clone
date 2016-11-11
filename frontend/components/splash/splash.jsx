import React from 'react';
import { CSSGrid, measureItems, makeResponsive, layout} from 'react-stonecutter';
import Album from '../album/album';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  handleAlbums() {
    if (this.props.albums.length > 0) {
      return(
        this.props.albums.map((album, idx) => (
          <li key={idx}>
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
        <h1>Loading</h1>
      );
    }
  }


  render() {
    const Grid = makeResponsive(measureItems(CSSGrid), {
      maxWidth: 1920,
      minPadding: 100,
      measureImages: true
    });
    return (
      <section className='splash-page'>
        <section className='splash-image'>
        </section>
        <section className='explore-music'>
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
}


export default Splash;
