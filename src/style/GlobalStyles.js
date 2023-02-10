import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button{
  color: white;
  border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 15px 45px;
    border-radius: 30px;
    background: #ffc107;
    &:hover {
        background: #e7ad0e;
      }
    }
a {
  text-decoration: none;
  color: ${colors.primaryColor};
}


ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.sucessColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
}
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
