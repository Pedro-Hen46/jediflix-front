import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import bgImage from "../../../lib/images/background.jpg";
import Logo from "../../../lib/images/logo-light.png";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function sendDataToApi(event) {
    event.preventDefault();

    setLoading(true);

    if (confirmPassword !== password) {
      window.alert("As senhas não estão iguais, tente novamente...");
      setLoading(false);
    }

    const promise = axios.post(`${process.env.REACT_APP_SERVER}/register`, {
      name: name,
      email: email,
      password: password,
    });

    promise.then((response) => {
      setLoading(false);

      if (response.status === 201) {
        navigate("/login");
      }
    });

    promise.catch((error) => {
      setLoading(false);
      console.log(error.message);

      if (error.message === "Request failed with status code 409") {
        if (window.confirm("Usuário já cadastrado, deseja efetuar o login ?")) {
          navigate("/login");
        }
      }
    });
  }

  return (
    <RegisterContainer>
      <img src={Logo} alt="JediFlix" />

      <form onSubmit={(event) => sendDataToApi(event)}>
        <label>Entre com o seu Nome:</label>
        <input
          disabled={loading}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          placeholder="Digite o seu nome..."
        />
        <label>Entre com a sua E-mail:</label>
        <input
          disabled={loading}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          placeholder="Digite o seu e-mail..."
        />
        <label>Entre com a sua Senha:</label>
        <input
          minlength="6"
          disabled={loading}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          placeholder="Digite o seu senha..."
        />
        <label>Confirme a sua Senha:</label>
        <input
          minlength="6"
          disabled={loading}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          type="password"
          placeholder="Repita a sua senha..."
        />
        {loading ? (
          <LoadingSpinner>
            <InfinitySpin width="200" color="#FFFFFF" />
          </LoadingSpinner>
        ) : (
          <button>REGISTRAR</button>
        )}
        <br />
      </form>
      <Link to="/login">
        <label>Já tem uma conta? Logue agora!</label>
      </Link>
      <img className="background" src={bgImage} alt="Nave no espaço" />
    </RegisterContainer>
  );
}

const LoadingSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterContainer = styled.div`
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
      color: #000;
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
