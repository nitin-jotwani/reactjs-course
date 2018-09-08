import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  componentWillMount() {
    console.log('Persons.js comp will mount');
  }

  componentDidMount() {
    console.log('Persons.js comp did mount');
  }

  componentWillUnmount() {
    console.log('Persons.js comp will unmount');
  }

  componentWillReceiveProps(props) {
    console.log('Persons.js comp will receive props', props);
  }

  shouldComponentUpdate(props, state) {
    console.log('Persons.js should comp update', props, state);
    return true; // SHOULD RETURN TRUE, ELSE NO EFFECT WILL HAPPEN
  }

  componentWillUpdate(props, state) {
    console.log('Persons.js comp will update', props, state);
  }

  componentDidUpdate() {
    console.log('Persons.js comp did update');
  }
  render() {
    console.log('Persons.js render');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          key={index}
          changed={event => this.props.changed(event, index)}
        />
      );
    });
  }
}

export default Persons;
