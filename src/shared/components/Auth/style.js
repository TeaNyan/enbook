import styled from "styled-components";
import { InputGroup } from "@blueprintjs/core";

export const Container = styled.div`
  height: auto;
  width: 350px;
  background-color: #021839;
  color: #fd953c;
  border-radius: 20px;
  border: 4px solid #fd953c;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Input = styled(InputGroup)`
  color: #fd953c;
`;

export const StyledForm = styled.form`
  width: 80%;
  text-align: center;
`;

export const ForgotPassword = styled.div`
  font-size: 0.8em;
  margin-top: 15px;
`;

export const LinkButton = styled.div`
  background: none !important;
  border: none;
  padding: 0 !important;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  display: inline;
`;
