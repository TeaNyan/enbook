import React from 'react';

import { Header, HeaderRow, NavButton, LogIn } from './style';

const loggedIn = () => {
  return (
    <HeaderRow>
      <NavButton to="/" exact>
        Home
      </NavButton>
      <NavButton to="/places" exact>
        Places
      </NavButton>
    </HeaderRow>
  );
};

const logIn = () => {
  return (
    <HeaderRow align="right">
      <LogIn>Log in</LogIn>
    </HeaderRow>
  );
};

const MainHeader = props => {
  return (
    <Header>
      <HeaderRow align="left">
        <img src="/logo.png" alt="logo"></img>
      </HeaderRow>
      <HeaderRow></HeaderRow>
      {logIn()}
    </Header>
  );
};

export default MainHeader;
