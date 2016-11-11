import React from 'react';
import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './navbar/session_form/session_form_container';
import BasicAudioPlayerContainer from './audio_player/basic_audio_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='whole-page'>
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
      </div>
    );
  }
}

export default App;
