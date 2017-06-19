import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './navbar/session_form/session_form_container';
import BasicAudioPlayerContainer from './audio_player/basic_audio_container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const sandcampTheme = {
 fontFamily: 'Titillium Web'
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='whole-page'>
        <MuiThemeProvider muiTheme={getMuiTheme(sandcampTheme)}>
          <div className='inner-container'>
            <section className='the-top'>
              <section>
                <NavBarContainer/>
              </section>
              {this.props.children}
            </section>
            <section className='footer-player'>
              <BasicAudioPlayerContainer/>
            </section>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
