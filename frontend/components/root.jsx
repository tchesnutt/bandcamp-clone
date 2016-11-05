import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import UserContainer from './artist_page/user_container';
import { fetchUser } from '../actions/user_actions';

const Root = ({ store }) => {

  const requestUserOnEnter = nextState => {
		store.dispatch(fetchUser(nextState.params.id));
	};

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="users/:id" component={UserContainer} onEnter={requestUserOnEnter}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
