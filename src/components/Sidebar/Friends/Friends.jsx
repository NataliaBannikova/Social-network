import React from 'react';
import s from "./Friends.module.css";

const Friends = (props) => {

  return (
        <div className={s.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpPylwdACa366IJktQIm3JGszrK3MeSoZTA&usqp=CAU" alt=""/>
          
          <div className={s.name}>{props.name}</div>
        </div> 
  );
};

export default Friends;
