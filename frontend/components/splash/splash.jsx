import React from 'react';
import { CSSGrid, measureItems, makeResponsive, layout} from 'react-stonecutter';
import Album from '../album/album';

class Splash extends React.Component {
  constructor(props) {
    super(props);
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
    // <h1>Discover</h1>
    return (
      <section className='splash-page'>
        <section className='splash-image'>
          <img src='http://res.cloudinary.com/dxtvmwxxb/image/upload/v1497751480/splash_btkeyw.gif'/>
        </section>
        <section className='explore-music'>
          <div className='explore-title'>
            <h1>
              Explore Albums
            </h1>
          </div>
          <section className='grid'>
            <Grid
              component="ul"
              columns={4}
              columnWidth={400}
              itemHeight={475}
              gutterWidth={20}
              gutterHeight={20}
              duration={800}
              easing="ease-out">
              {this.handleAlbums()}
            </Grid>
          </section>
        </section>
      </section>

    )
  }
}


export default Splash;
