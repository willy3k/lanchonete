import styled from 'styled-components';

export const Fundo = styled.div`
  display: flex;
  width: 100%;
  height: 700px;
  color: white;

  .fundo {
    display: flex;
    position: absolute;
    width: 100%;
    height: 700px;
    color: white;
  }
  img {
    width: 100%;
  }
  .div-chamada {
    width: 600px;
    position: absolute;
    margin-top: 5rem;
    margin-left: 6rem;
  }
  h2 {
    font-size: 45px;
    font-family: Trebuchet;
  }
  p {
    font-size: 18px;
    font-weight: 100;
  }
`;

export const Section = styled.div`
  background: white;
  color: white;
  padding-bottom: 50px;

  .desconto {
    margin-top: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-des {
    padding: 20px;
    display: flex;
    width: 560px;
    margin: 20px;
    background: #384144;
    border-radius: 10px;
  }

  .foto {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px solid #ffc107;
    background: black;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      -webkit-transition: -webkit-transform 0.5s ease;
      transition: transform 0.5s ease;

      &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }

  .descriçao {
    padding: 20px;

    h2 {
      font-family: Trebuchet;
      font-size: 27px;
      margin-bottom: 10px;
    }
  }
  .desc {
    display: flex;
    align-items: center;
    padding-bottom: 5px;

    h3 {
      display: flex;
      align-items: center;
      font-family: Trebuchet;
      font-size: 50px;
      margin-right: 8px;
    }

    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Trebuchet;
      font-size: 38px;
      margin-right: 5px;
      padding-top: 15px;
    }
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Trebuchet;
      padding-top: 29px;
    }
  }

  //cardapio

  .cardapio {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      margin-top: 6rem;
      margin-bottom: 3rem;
      font-size: 35px;
      font-family: Trebuchet;
      color: black;
    }
  }

  .links-CDP {
    display: flex;

    a {
      font-size: 20px;
      color: black;
      margin: 1rem 2rem;
    }
  }

  .card-CDP {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .CDP {
    width: 350px;
    margin: 20px;
    border-radius: 16px;
    background: #384144;
  }

  .card-f {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f2f3;
    width: 100%;
    height: 230px;
    border-radius: 15px 15px 0 50px;
    margin-bottom: 10px;
    overflow: hidden;

    img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60%;
      height: 60%;
      -webkit-transition: -webkit-transform 0.5s ease;
      transition: transform 0.5s ease;
      &:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
  }

  .card-D {
    margin: 20px;

    h4 {
      font-size: 23px;
      margin-bottom: 13px;
    }
  }
  .valor {
    font-size: 20px;
    margin: 20px;
    margin-bottom: 35px;
    display: flex;
    justify-content: space-between;
  }
`;

export const DivSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #384144;
  padding: 50px;

  .sect-About {
    display: flex;
    width: 90%;
  }

  .photo {
    width: 50%;
    margin: 0 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .text {
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 60%;
    margin: 0 25px;

    h2 {
      font-size: 40px;
      font-family: Trebuchet;
      margin-bottom: 20px;
    }

    span {
      margin-bottom: 30px;
    }
    button {
      width: 200px;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  background: white;

  h2 {
    margin: 20px 0;
  }

  form {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
  }
  label {
    font-size: 20px;
  }
  input {
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 20px;
    width: 500px;
  }
  button {
    width: 500px;
  }
`;

export const Depoimentos = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
  h2 {
    font-size: 35px;
    font-family: Trebuchet;
  }

  .depoimentos {
    width: 90%;
    overflow: auto;
  }
  .slide-pai {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slide {
    border-radius: 5px;
    margin: 20px;
    width: 550px;
  }

  .depo {
    color: white;
    padding: 20px;
    border-radius: 5px;
    background: #384144;
    margin-bottom: 20px;
    width: 550px;
  }
  span {
    margin-bottom: 10px;
  }
  h3 {
    font-size: 25px;
    margin: 10px 0;
  }

  .img {
    border: 4px solid #ffc107;
    width: 130px;
    height: 130px;
    border-radius: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 20px;
  }

  .bar {
    width: 70px;
    height: 17px;
    border: 2px solid black;
    margin: 6px;
    border-radius: 5px;
    cursor: pointer;
    transition: 1s;
    &:hover {
      background: #384144;
    }
  }
`;

export const Footer = styled.footer`
  background: #384144;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .primy-fot {
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .divs {
    color: white;
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .feane {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2 {
      font-size: 30px;
    }
  }

  .horario {
    margin-bottom: 39px;
  }
  span {
    margin: 10px;
  }

  .icon .icons {
    margin: 10px;
    font-size: 30px;
    transition: 0.6s;
    &:hover {
      color: #ffc107;
    }
  }

  .segund-fo {
    color: wheat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
