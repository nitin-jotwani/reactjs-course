import React from 'react';
import Classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
const layout = props => {
  return (
    <div>
      <div>
        <Toolbar />
      </div>
      <main className={Classes.content}>{props.children}</main>
    </div>
  );
};

export default layout;
