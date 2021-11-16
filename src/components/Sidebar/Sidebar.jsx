import React from 'react';
import Friends from "./Friends/Friends";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
  
  let sidebarElements = props.state.map (p => <Friends name={p.name} />);
  return (
    <div>
      <div className={s.title}>Friends</div>
      <div className={s.friends}>
        { sidebarElements }
      </div>
    </div>
  );
};

export default Sidebar;
