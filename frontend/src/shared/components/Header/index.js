import React, { useCallback } from "react";

import { Header, HeaderRow, NavButton, LogIn } from "./style";

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

const MainHeader = props => {
  const { onOpenModal, onCloseModal } = props;

  const logIn = useCallback(() => {
    return (
      <HeaderRow align="right">
        <LogIn onClick={onOpenModal}>Log in</LogIn>
      </HeaderRow>
    );
  }, [onOpenModal, onCloseModal]);

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
