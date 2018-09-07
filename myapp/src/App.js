import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, This is my App created Using Create-react-app</h1>
    //   </div>
    // );
    // THIS IS EXACT EQUIVALENT OF ABOVE JSX CODE. THIS IS WHAT IS DONE BEHIND THE SCENE INTERNALLY
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is my App'));
  }
}

export default App;
