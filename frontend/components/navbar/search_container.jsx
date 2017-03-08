import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchResults } from '../../actions/search_actions';


const mapStateToProps = (state) => ({
  searchResults: state.search.result
});

const mapDispatchToProps = (dispatch) => ({
  sendQuery: query => dispatch(fetchSearchResults(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
