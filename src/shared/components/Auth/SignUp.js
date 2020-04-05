import React, { useCallback } from "react";
import { FormGroup, Classes, Button } from "@blueprintjs/core";
import { useForm } from "react-hook-form";
import classNames from "classnames";

import {
  Container,
  Input,
  StyledForm,
  ForgotPassword,
  LinkButton,
} from "./style";

const SignUp = (props) => {
  const { register, handleSubmit } = useForm();

  const { onToggleSignIn } = props;

  const onSubmit = useCallback((d) => {
    console.log(d.text);
  }, []);

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
          <Button className={classNames(Classes.INTENT_WARNING)} type="submit">
            Sign in
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

export default SignUp;
