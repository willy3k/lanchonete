import styled from 'styled-components';
// import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  display: flex;
  position: relative;
  background: linear-gradient(50deg, #0d0e10 40%, #374141 90%);
  padding: 23px 19px;
  padding-top: 30px;
  /* margin: 5px 0 0 0; */

  h1 {
    font-family: Trebuchet;
    font-size: 30px;
    margin-right: 11rem;
    margin-left: 5rem;
    display: flex;
    justify-content: center;
    color: white;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 5rem 0 5.3rem;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0 24px 0;
    font-size: 18px;
    transition: 1s;
    &hover {
      color: #ffc107;
    }
  }

  .icons-btn {
    display: flex;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 0 10px 0 2px;
    transition: 0.1s;
    &:hover {
      color: #ffc107;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    font-size: 18px;
    border-radius: 20px;
    padding: 8px 26px;
    background: #ffc107;
    transition: 0.1s;
    &:hover {
      background: #e7ad0e;
    }
  }
`;
