import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        {/* Avatar for logged in user */}
        <Avatar
          className="header__avatar"
          // alt="CoolOne"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* Time Icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* Search Icon */}
        <SearchIcon />
        {/* input feild*/}
        <input
          type="text"
          placeholder={`Search ${user?.displayName} profile`}
        />
      </div>
      <div className="header__right">
        {/* Help Icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
