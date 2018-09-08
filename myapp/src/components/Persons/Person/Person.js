import React, { Component } from 'react';
import './Person.css';
class Person extends Component {
  componentWillMount() {
    console.log('Person.js comp will mount');
  }

  componentDidMount() {
    console.log('Person.js comp did mount');
  }

  componentWillUnmount() {
    console.log('Person.js comp will unmount');
  }

  render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I'm {this.props.age} years old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;
