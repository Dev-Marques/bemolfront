import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin: 5% auto;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
  border: 1px dashed black;
  padding: 3rem;
  width: 100%;
  justify-content: center;
  h1,
  h2 {
    text-align: center;
    color: #1b78aa;
  }
`;

export const Name = styled(TextField)`
  width: 55%;
  color: white;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const Email = styled(TextField)`
  width: 45%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
  color: white;
`;

export const Zip = styled(TextField)`
  width: 30%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const Street = styled(TextField)`
  width: 70%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const Number = styled(TextField)`
  width: 30%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const Complement = styled(TextField)`
  width: 70%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const District = styled(TextField)`
  width: 40%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const Locality = styled(TextField)`
  width: 30%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const State = styled(TextField)`
  width: 30%;
  border: ${(props) => (props.error ? '1px solid red' : '')};
`;

export const ContextButton = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  justify-content: center;

  button {
    width: 50%;
    height: 100%;
    border: none;
    border-radius: 2px;
    background-color: #1f93d4;
    color: white;
    font-size: 1.5rem;
    :hover {
      background-color: #26a1e5;
    }
  }
`;
