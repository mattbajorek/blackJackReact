import React, { Component } from 'react';
import TextDisplay from './TextDisplay';
import './reset.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        This is definitely a React app now!!
        <TextDisplay />
      </div>
    )	
  }

}

export default App;