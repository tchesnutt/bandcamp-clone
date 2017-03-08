import React from 'react';
import { AutoComplete } from 'material-ui';
import { hashHistory, Link } from 'react-router';


//Currently only searches over albums.
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: undefined,
      results: this.props.searchResults,
      dataSource: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.objectToArray = this.objectToArray.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let nextData = this.objectToArray(nextProps.searchResults);
    this.setState({dataSource: nextData, results: nextProps.searchResults});
  }

  objectToArray(obj) {
    let data = Object.values(obj);
    let result = [];
    data.forEach((el) => {
      result.push(el["title"]);
    });
    return result;
  }

  handleSubmit() {
    this.setState({query: ""})
    let id = Object.keys(this.state.results);
    let selectedAlbum = this.state.results[id[0]];
    hashHistory.push(`/users/${selectedAlbum.user_id}/albums/${selectedAlbum.id}`);
  }

  handleUpdate(text) {
    this.setState({query: text})
    this.props.sendQuery(text);
  }

  render() {
    return (
      <section className='album-search-bah'>
        <AutoComplete
          hintText="Search Albums"
          searchText={this.state.query}
          filter={AutoComplete.caseInsensitiveFilter}
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdate}
          onNewRequest={this.handleSubmit}/>
      </section>
    )
  }
}

export default Search;
