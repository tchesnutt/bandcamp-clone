import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import UserContainer from './artist_page/user_container';
import { fetchUser } from '../actions/user_actions';
import {
  blue500, blue700,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { fade } from 'material-ui/utils/colorManipulator';


const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
  palette: {
    primary1Color: blue500,
    primary2Color: blue700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blue500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  }
});

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
