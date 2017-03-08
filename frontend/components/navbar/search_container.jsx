import { connect } from 'react-redux';
import search from './search';
import { fetchSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => ({
  searchResults: state.search.result
});

const mapDispatchToProps = (dispatch) => ({
  query: query => disptach(fetchSearchResults(query))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(search);
