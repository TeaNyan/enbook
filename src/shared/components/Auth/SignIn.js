import React, { useCallback } from "react";
import { FormGroup, Classes, Button } from "@blueprintjs/core";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { connect } from "react-redux";

import * as Actions from "../../../redux/actions";

import {
  Container,
  Input,
  StyledForm,
  ForgotPassword,
  LinkButton,
} from "./style";

const SignIn = (props) => {
  const { register, handleSubmit } = useForm();

  const { onToggleSignIn, onSignIn, loginError, request, login } = props;

  const loginAttempt = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (e) {
      return e.message;
    }
    return;
  };

  const onSubmit = useCallback(
    async (d) => {
      await loginAttempt(d);
    },
    [onSignIn]
  );

  return (
    <div className={props.className}>
      <Container>
        <h3>Login into your account</h3>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Input
              id="text-input"
              placeholder="Enter your e-mail"
              inputRef={register}
              name="email"
              type="text"
              style={{
                backgroundColor: "#021839",
                border: 0,
                borderBottom: "2px solid #fd953c",
                color: "#fff",
              }}
            />
            <Input
              id="text-input"
              placeholder="Password"
              inputRef={register}
              name="password"
              type="password"
              style={{
                backgroundColor: "#021839",
                border: 0,
                borderBottom: "2px solid #fd953c",
                color: "#fff",
              }}
            />
          </FormGroup>
          {loginError && <div>{loginError.title}</div>}
          <Button
            className={classNames(Classes.INTENT_WARNING)}
            type="submit"
            loading={request.isLoading}>
            Sign in
          </Button>
        </StyledForm>
        <ForgotPassword>
          <span>Don't have an account? </span>
          <LinkButton style={{ color: "#fff" }} onClick={onToggleSignIn}>
            Sign-up here
          </LinkButton>
        </ForgotPassword>
      </Container>
    </div>
  );
};

export default SignIn;
