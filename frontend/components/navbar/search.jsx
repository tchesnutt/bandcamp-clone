import React from 'react';
import { AutoComplete } from 'material-ui';
import { hashHistory } from 'react-router';


class AlbumSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: [],
      query: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let titles = nextProps.albumSearch.map((album, idx) => {
      return album.title
    });
    this.setState({dataSource: titles})
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
