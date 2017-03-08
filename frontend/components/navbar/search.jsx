import React from 'react';
import Modal from 'react-modal';
import { hashHistory, Link } from 'react-router';

const customStyles = {
  overlay : {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      padding: '30px'
  }
};


class AlbumSearch extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      query: undefined,
      results: this.props.searchResults
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({results: nextProps.results})
  }

  handleSubmit(text) {
    let selectedAlbum = this.props.albumSearch.filter((album) => (album.title == text));
    hashHistory.push(`/users/${selectedAlbum[0].user_id}/albums/${selectedAlbum[0].id}`);
  }

  handleUpdate(text) {
    this.setState({query: text});
  }

  render() {
    return (
      <section className='album-search-bah'>
        <AutoComplete
          hintText="Search Albums"
          dataSource={this.state.dataSource}
          onNewRequest={this.handleSubmit}/>
      </section>
    )
  }
}

export default AlbumSearch;
