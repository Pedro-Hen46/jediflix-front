import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import bgImage from "../../../lib/images/background.jpg";
import Logo from "../../../lib/images/logo-light.png";

export default function Login() {
    const navigate = useNavigate();
  return (
    <LoginContainer>
      <img src={Logo} alt="JediFlix" />

      <form>
        <label>Entre com o seu E-mail:</label>
        <input type="email" placeholder="Email" />
        <label>Entre com a sua Senha:</label>
        <input type="password" placeholder="Senha" />
        <button onClick={() => navigate("/")}>LOGIN</button>
        <br />
      </form>
      <Link to="/register">
        <label>Não tem uma conta? Crie agora!</label>
      </Link>
      <img className="background" src={bgImage} alt="Nave no espaço" />
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 600px;
    height: 130px;
    object-fit: cover;
  }
  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: red;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;

    filter: brightness(0.5);
    -webkit-mask-image: linear-gradient(to top, transparent 25%, #161831 100%);
  }
  form {
    width: 40vw;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    input {
      padding: 1rem;
      height: 40px;
      border: thin solid #f82b4b;
      border-radius: 6px;
      color: #fff;
    }
    label {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-top: 10px;
    }
    button {
      margin-top: 15px;
      height: 40px;
      background-color: #f82b4b;
      border: thin solid #f82b4b;
      border-radius: 6px;
      color: #fff;
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 1.2rem;

      transition: 0.2s linear;
      &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 25px rgba(255, 0, 60, 0.9);
      }
    }
  }
  label {
    color: #fff;

    &:hover {
      cursor: pointer;
      font-weight: 700;
    }
  }
`;
