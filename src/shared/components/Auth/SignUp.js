import React, { useCallback, useState, useEffect } from "react";
import { FormGroup, Classes, Button } from "@blueprintjs/core";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { connect } from "react-redux";

import * as Actions from "../../../redux/actions";
import { selectLogoutRequest } from "../../../redux/selectors";
import {
  Container,
  Input,
  StyledForm,
  ForgotPassword,
  LinkButton,
} from "./style";

const SignUp = (props) => {
  const [isError, setIsError] = useState("");
  const { register, handleSubmit } = useForm();

  const { onToggleSignIn, signup, request, signupError } = props;

  useEffect(() => {
    if (request.status === -1) {
      setIsError(request.title);
    }
  }, [request]);

  const onSubmit = useCallback(
    async (d) => {
      if (d.password !== d.confirmPassword)
        return setIsError("Password missmatch");
      setIsError("");
      await signup(d.name, d.email, d.password);
    },
    [signup]
  );

  return (
    <div className={props.className}>
      <Container>
        <h3>Create a new account</h3>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Input
              id="text-input"
              placeholder="Enter your name"
              inputRef={register}
              name="name"
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
              placeholder="Enter your password"
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
            <Input
              id="text-input"
              placeholder="Confirm password"
              inputRef={register}
              name="confirmPassword"
              type="password"
              style={{
                backgroundColor: "#021839",
                border: 0,
                borderBottom: "2px solid #fd953c",
                color: "#fff",
              }}
            />
          </FormGroup>
          {signupError && <div>{signupError.title}</div>}
          {isError && <div>{isError}</div>}
          <Button className={classNames(Classes.INTENT_WARNING)} type="submit">
            Sign up
          </Button>
        </StyledForm>
        <ForgotPassword>
          <span>Already have an account? </span>
          <LinkButton style={{ color: "#fff" }} onClick={onToggleSignIn}>
            Sign-in here
          </LinkButton>
        </ForgotPassword>
      </Container>
    </div>
  );
};

export default connect((state) => {
  return {
    request: selectLogoutRequest(state),
    signupError: state.signup.error,
  };
}, Actions)(SignUp);
