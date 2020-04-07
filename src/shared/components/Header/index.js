import React from "react";
import { connect } from "react-redux";
import { Spinner } from "@blueprintjs/core";

import * as Actions from "../../../redux/actions";
import { Header, HeaderRow, LogIn, LogOut } from "./style";
import {
  selectLoginRequest,
  selectLogoutRequest,
} from "../../../redux/selectors";

const MainHeader = (props) => {
  const { onOpenModal, me, onLogout, loginRequest, logoutRequest } = props;

  const LogInLogOut = React.memo((props) => {
    const { me, onOpenModal, loginRequest, logoutRequest, onLogout } = props;
    return (
      <HeaderRow align="right">
        {!me || !me.data ? (
          <LogIn onClick={onOpenModal}>
            {!loginRequest.isLoading ? "Log in" : <Spinner size={20} />}
          </LogIn>
        ) : (
          <LogOut onClick={onLogout}>
            {!logoutRequest.isLoading ? "Log out" : <Spinner size={20} />}
          </LogOut>
        )}
      </HeaderRow>
    );
  });

  return (
    <Header>
      <HeaderRow align="left">
        <img src="/logo.png" alt="logo"></img>
      </HeaderRow>
      <HeaderRow></HeaderRow>
      <LogInLogOut
        onOpenModal={onOpenModal}
        me={me}
        onLogout={onLogout}
        loginRequest={loginRequest}
        logoutRequest={logoutRequest}
      />
    </Header>
  );
};

export default connect((state) => {
  return {
    loginRequest: selectLoginRequest(state),
    logoutRequest: selectLogoutRequest(state),
  };
}, Actions)(MainHeader);
