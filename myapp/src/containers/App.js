import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      { name: 'Nitin', age: 25 },
      { name: 'XYZ', age: 26 },
      { name: 'PQR', age: 27 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]; //  USING ... SO AS TO CREATE A NEW COPY THAN REFERENCING TO ORIGINAL ONE
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, index) => {
    const person = { ...this.state.persons[index] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };
  render() {
    return (
      <div className="App">
        <Cockpit clicked={this.togglePersonHandler} />
        {this.state.showPersons ? (
          <div>
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
          </div>
        ) : null}
      </div>
    );
    // THIS IS EXACT EQUIVALENT OF ABOVE JSX CODE. THIS IS WHAT IS DONE BEHIND THE SCENE INTERNALLY
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is my App'));
  }
}

export default App;
