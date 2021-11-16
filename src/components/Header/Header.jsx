
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import userPhoto from "../../assets/images/user.jpeg";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg"></img>

      <div className={s.loginBlock}>
        { props.isAuth 
        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
        : <NavLink to={'/login'}>Login</NavLink> }
      </div>
      <div className={s.usersAva}>
          <img src={props.large != null ? props.large : userPhoto} className={s.userPhoto} />
      </div>
    </header>
  );
};

export default Header;
