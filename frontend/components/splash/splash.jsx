import React from 'react';
import Slider from 'react-slick';
import Album from '../album/album';
import sizeMe from 'react-sizeme'

const albumStyle = {
  card: {
    width: '200px',
    height: '250px'
  },
  title: {
    fontSize: '16px',
    lineHeight: '100%'
  },
  subtitle: {
    fontSize: '12px',
    lineHeight: '130%'
  }
};

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      accessibility: true,
      arrows: true,
      dots: false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      draggable: true
    };
  }

  handleAlbums() {
    if (this.props.albums.length > 0) {
      return(
        this.props.albums.map((album, idx) => (
          <div key={idx} className="album-carousel-element">
            <Album
            containerStyle={albumStyle.card}
            id={album.id}
            title={album.title}
            coverUrl={album.cover_url}
            userId={album.user_id}
            artistName={album.artist_name}
            titleStyle={albumStyle.title}
            subtitleStyle={albumStyle.subtitle}/>
          </div>
        ))
      );
    } else {
      return(
        <h1>Loading</h1>
      );
    }
  }


  render() {
    const { width } = this.props.size;
    let nSlides = Math.floor((width * .9) / 210)
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
            <Slider {...this.settings}
              slidesToShow={nSlides}>
              {this.handleAlbums()}
            </Slider>
          </section>
        </section>
      </section>
    )
  }
}

const sizeMeConfig = {
  monitorWidth: true,
  monitorHeight: false,
  monitorPosition: false,
  refreshRate: 16,
  refreshMode: 'throttle',
  noPlaceholder: false
};

export default sizeMe(sizeMeConfig)(Splash);
