import React from 'react';
import { NavLink } from 'react-router-dom';

import { Header } from './style';
import { HeaderRow } from './style';

const MainHeader = props => {
  return (
    <Header>
      <HeaderRow align="left">
        <img src="/logo.png" alt="logo"></img>
      </HeaderRow>
      <HeaderRow></HeaderRow>
      <HeaderRow>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/places" exact>
          Places
        </NavLink>
      </HeaderRow>
    </Header>
  );
};

export default MainHeader;
