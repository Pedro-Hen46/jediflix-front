import React from "react";
import styled from "styled-components";


import Lottie from "react-lottie-player";
import babyYoda from "../../lib/svg/sadbaby.json";
import { useNavigate } from "react-router-dom";

export default function ModalCancelOrder({setControl}) {
    const navigate = useNavigate();

    function cancelOrder(){
        navigate("/");
    }
  return (
    <ModalContainer>
      <h4>Tem certeza que deseja cancelar o pedido?</h4>
      <span>Estamos finalizando o processo, não cancele agora :(</span>
      <Lottie
        loop
        animationData={babyYoda}
        play
        style={{ width: 300, height: 300 }}
      />
      <Buttons>
        <div onClick={() => setControl(false)}>
          <h1>CONTINUAR NA PÁGINA</h1>
        </div>
        <div className="yes-button" onClick={() => cancelOrder()}>
          <h1>QUERO CANCELAR</h1>
        </div>
      </Buttons>
    </ModalContainer>
  );
}
const Buttons = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  .yes-button {
    border: 4px solid #f82b4b;
    background-color: #f82b4b;
    color:#fff;
  }

  div {
    width: 30%;
    height: 4rem;
    margin-right: 2rem;
    background-color: #181631;
    border: 4px solid #181631;
    color:#fff;

    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(255, 0, 60, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1.4px;

    transition: 0.2s linear;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 25px rgba(255, 0, 60, 0.9);
      h1{
        font-weight: 600;
      }
    }
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 1 !important;
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h4 {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-size: 2.5rem;
    text-align: center;
  }
  h1 {
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-size: 1.2rem;
    text-align: center;
  }
  span {
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 1.2px;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    text-align: center;
  }
`;
