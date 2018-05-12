import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
    </div>
    <div>
      <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
    </div>
    <div>
      <NavLink to="/help" activeClassName="is-active">Help page</NavLink>
    </div>
  </div>
);

export default Header;
