import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import SessionFormContainer from './navbar/session_form/session_form_container';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (store) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      hashHistory.push('/');
    }
  }
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
