import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import bgImage from "../../../lib/images/background.jpg";
import avatar from "../../../lib/images/yodaApresentation.png";
import CloseToHome from "../../utils/CloseIconTohome";

export default function AccountAjusts() {
  const [updateAccount, setUpdateAccount] = useState(true);
  const [name, setUpdateName] = useState("");
  const [password, setUpdatePassword] = useState("");
  const [email, setEmail] = useState("dev@dev.com");

  console.log(name, password)

  function updateAccountInDatabase(event) {
    event.preventDefault();
 
    axios.post(`${process.env.REACT_APP_SERVER}/user-update`,
    {
        name: name, 
        newPassword: password,
        email: email
    }).then((response) => console.log(response.data)).catch((err) => console.log(err));
    
  }

  return (
    <Container>
      <CloseToHome />
      <h1>Ajustes da sua conta.</h1>
      <span>Jedi, faça uma atualização da sua conta.</span>

      <DataUser>
        <img src={avatar} />
        <form onSubmit={(e) => updateAccountInDatabase(e)}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Pedro Henrique"
            onChange={(e) => setUpdateName(e.target.value)}
            disabled={updateAccount}
          />

          <label>Email</label>
          <input type="text" placeholder="teste@teste.com" disabled />

          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setUpdatePassword(e.target.value)}
            disabled={updateAccount}
          />

          {updateAccount ? (
            <button onClick={() => setUpdateAccount(false)}>
              Atualizar Dados
            </button>
          ) : (
            <button onClick={() => setUpdateAccount(true)}>
              Finalizar Ajuste
            </button>
          )}
        </form>
      </DataUser>

      <img className="background" src={bgImage} alt="Nave no espaço" />
    </Container>
  );
}
const DataUser = styled.div`
  width: 80%;
  height: 60%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 10%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      padding: 1rem;
      height: 40px;
      border: thin solid #f82b4b;
      border-radius: 6px;
      color: #000000;
      margin-bottom: 10px;
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
      width: 100%;
      height: 40px;
      background-color: #f82b4b;
      border: thin solid #f82b4b;
      border-radius: 6px;
      color: #fff;
      letter-spacing: 1px;
      font-size: 1rem;

      transition: 0.2s linear;
      &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 25px rgba(255, 0, 60, 0.9);
      }
    }
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: red;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;

    filter: brightness(0.2);
    -webkit-mask-image: linear-gradient(to top, transparent 25%, #161831 100%);
  }
`;
