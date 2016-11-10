import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import UserContainer from './artist_page/user_container';
import AlbumPageContainer from './album_page/album_page_container';
import { fetchUser } from '../actions/user_actions';
import { fetchAlbums } from '../actions/album_actions';
import { fetchTracks } from '../actions/tracks_actions';
import {
  blue500, blue700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';


const Root = ({ store }) => {

  const requestUserOnEnter = nextState => {
		store.dispatch(fetchUser(nextState.params.id));
		store.dispatch(fetchAlbums(nextState.params.id));
	};

  const requestAlbumOnEnter = nextState => {
		store.dispatch(fetchUser(nextState.params.id));
		store.dispatch(fetchAlbums(nextState.params.id));
		store.dispatch(fetchTracks(nextState.params.albumId));
	};

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="users/:id" component={UserContainer} onEnter={requestUserOnEnter}/>
          <Route path='users/:id/albums/:albumId' component={AlbumPageContainer} onEnter={requestAlbumOnEnter}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
