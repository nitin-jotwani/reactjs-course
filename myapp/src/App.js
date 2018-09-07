import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Nitin', age: 25 },
      { name: 'XYZ', age: 26 },
      { name: 'PQR', age: 27 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Nitin', age: 26 },
        { name: 'XYZ', age: 27 },
        { name: 'PQR', age: 27 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, This is my App created Using Create-react-app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobby is xyz
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // THIS IS EXACT EQUIVALENT OF ABOVE JSX CODE. THIS IS WHAT IS DONE BEHIND THE SCENE INTERNALLY
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is my App'));
  }
}

export default App;
