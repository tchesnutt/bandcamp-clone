import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import UserContainer from './artist_page/user_container';
import AlbumPageContainer from './album_page/album_page_container';
import SplashContainer from './splash/splash_container';
import { fetchUser } from '../actions/user_actions';
import { fetchAlbums, fetchAllAlbums } from '../actions/album_actions';
import { fetchTracks } from '../actions/tracks_actions';

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

  const requestDataSource = nextState => {
    store.dispatch(fetchAllAlbums());
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} onEnter={requestDataSource}>
          <IndexRoute component={SplashContainer}/>
          <Route path="users/:id" component={UserContainer} onEnter={requestUserOnEnter}/>
          <Route path='users/:id/albums/:albumId' component={AlbumPageContainer} onEnter={requestAlbumOnEnter}/>
        </Route>
        <Route path="/utm_source=coverletter" component={App} onEnter={requestDataSource}>
          <IndexRoute component={SplashContainer}/>
          <Route path="users/:id" component={UserContainer} onEnter={requestUserOnEnter}/>
          <Route path='users/:id/albums/:albumId' component={AlbumPageContainer} onEnter={requestAlbumOnEnter}/>
        </Route>
        <Route path="/utm_source=resume" component={App} onEnter={requestDataSource}>
          <IndexRoute component={SplashContainer}/>
          <Route path="users/:id" component={UserContainer} onEnter={requestUserOnEnter}/>
          <Route path='users/:id/albums/:albumId' component={AlbumPageContainer} onEnter={requestAlbumOnEnter}/>
        </Route>
        <Route path="/&utm_source=personalsite" component={App} onEnter={requestDataSource}>
          <IndexRoute component={SplashContainer}/>
          <Route path="users/:id" component={UserContainer} onEnter={requestUserOnEnter}/>
          <Route path='users/:id/albums/:albumId' component={AlbumPageContainer} onEnter={requestAlbumOnEnter}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
