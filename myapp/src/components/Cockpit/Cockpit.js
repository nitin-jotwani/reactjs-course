import React from 'react';
const cockpit = (props) => {
  return (
    <div>
      <h1>Hi, This is my App created Using Create-react-app</h1>
      <button
        onClick={props.clicked}
        style={{ backgroundColor: 'yellow' }}
      >
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
