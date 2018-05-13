import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';

const Header = () => (
  <div className="header-container">
    <AppBar position="static" color="default">
      <Button>
        <NavLink className="nav-item" to="/" activeClassName="is-active" exact>Playlist</NavLink>
      </Button>
      <Button>
        <NavLink className="nav-item" to="/about" activeClassName="is-active">About me</NavLink>
      </Button>
    </AppBar>
  </div>
);

export default Header;
