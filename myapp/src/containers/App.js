import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';
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
        <h1>Hi, This is my App created Using Create-react-app</h1>
        <button
          onClick={this.togglePersonHandler}
          style={{ backgroundColor: 'yellow' }}
        >
          Switch Name
        </button>
        {this.state.showPersons ? (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  click={this.deletePersonHandler.bind(this, index)}
                  key={index}
                  changed={event => this.nameChangedHandler(event, index)}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    );
    // THIS IS EXACT EQUIVALENT OF ABOVE JSX CODE. THIS IS WHAT IS DONE BEHIND THE SCENE INTERNALLY
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is my App'));
  }
}

export default App;
