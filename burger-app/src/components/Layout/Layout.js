import React from 'react';
import Classes from './Layout.css';
const layout = props => {
  return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={Classes.content}>{props.children}</main>
    </div>
  );
};

export default layout;
