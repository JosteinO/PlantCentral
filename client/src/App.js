import React, { Component } from 'react';
import './App.css';
import Plants from './Components/Plants/Plants';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My plants</h1>
        </header>
        <Plants />
      </div>
    );
  }
}

export default App;
