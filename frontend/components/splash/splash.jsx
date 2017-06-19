import React from 'react';
import Slider from 'react-slick';
import Album from '../album/album';
import RightB from './right_arrow';
import LeftB from './left_arrow';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.settings = {
      accessibility: true,
      nextArrow: <RightB/>,
      prevArrow: <LeftB/>,
      arrows: true,
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    }
  }

  handleAlbums() {
    if (this.props.albums.length > 0) {
      return(
        this.props.albums.map((album, idx) => (
          <div key={idx}>
            <Album
            id={album.id}
            userId={album.user_id}
            title={album.title}
            coverUrl={album.cover_url}
            createdAt={album.created_at}
            userId={album.user_id}/></div>
        ))
      );
    } else {
      return(
        <h1>Loading</h1>
      );
    }
  }


  render() {

    return (
      <section className='splash-page'>
        <section className='splash-image'>
          <img src='http://res.cloudinary.com/dxtvmwxxb/image/upload/v1497751480/splash_btkeyw.gif'/>
        </section>
        <section className='explore-music'>
          <div className='explore-title'>
            <h1>Explore Albums</h1>
          </div>
          <section className='grid'>
            <Slider {...this.settings}>
              {this.handleAlbums()}
            </Slider>
          </section>
        </section>
      </section>

    )
  }
}


export default Splash;
