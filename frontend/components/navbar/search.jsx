import React from 'react';
import { Link } from 'react-router';
import { TextField, Paper } from 'material-ui';


class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = { query: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleArtists = this.handleArtists.bind(this);
    this.handleAlbums = this.handleAlbums.bind(this);
    this.handleTracks = this.handleTracks.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleUpdate(e) {
    this.setState({ query: e.currentTarget.value });
    this.props.sendQuery(e.currentTarget.value);
  }

  handleDropdown() {
    if(this.state.query === ''){
      return(<div/>)
    } else {
      return(
          <ul className='search-dropdown'>
            {this.handleArtists()}
            {this.handleAlbums()}
            {this.handleTracks()}
          </ul>
      );
    }
  }

  handleArtists(){
    if( this.props.searchResults.artists.length > 0 ) {
      return(
        <div className='dropdown-artists'>
          {this.props.searchResults.artists.map((artist, idx) => {
            return(
              <Link to={`/users/${artist.id}`} key={idx} onClick={this.clear}>
                <li>
                  <div className='dropdown-el-left'>
                    <img src={artist.profile_pic_url}></img>
                    <h4>{artist.username}</h4>
                  </div>
                  <div className='dropdown-el-right'>
                    <h4>Artist</h4>
                  </div>
                </li>
              </Link>
            )
          })}
        </div>
      )
    }
  }

  handleAlbums(){
    if( this.props.searchResults.albums.length > 0 ) {
      return(
        <div className='dropdown-albums'>
          {this.props.searchResults.albums.map( (album, idx) => {
            return(
              <Link to={`/users/${album.user_id}/albums/${album.id}`} key={idx + 3} onClick={this.clear}>
                <li>
                  <div className='dropdown-el-left'>
                    <img src={album.cover_url}></img>
                    <h4>{album.title}</h4>
                  </div>
                  <div className='dropdown-el-right'>
                    <h4>Album</h4>
                  </div>
                </li>
              </Link>
            )
          })}
        </div>
      )
    }
  }

  handleTracks(){
    if( this.props.searchResults.tracks.length > 0 ) {
      return(
        <div className='dropdown-tracks'>
          {this.props.searchResults.tracks.map( (track, idx) => {
            let album = this.props.searchResults.album_art[idx];
            return(
              <Link to={`/users/${album.user_id}/albums/${album.id}`} key={idx + 6} onClick={this.clear}>
                <li>
                  <div className='dropdown-el-left'>
                    <img src={album.cover_url}></img>
                    <h4>{track.title}</h4>
                  </div>
                  <div className='dropdown-el-right'>
                    <h4>Track</h4>
                  </div>
                </li>
              </Link>
            )
          })}
        </div>
      )
    }
  }

  clear() {
    this.setState({query: ''});
    this.props.sendQuery('');
  }

  render() {
    return (
      <section className='album-search-bah'>
        <TextField
          hintText="Search"
          onChange={this.handleUpdate}
          value={this.state.query}/>
        {this.handleDropdown()}
      </section>
    )
  }
}

export default Search;
