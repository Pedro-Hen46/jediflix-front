import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import babyYoda from "../../../lib/svg/sadbaby.json";

import bgImage from "../../../lib/images/background.jpg";
import Ticket from "../../utils/Ticket";
import { useNavigate } from "react-router-dom";
export default function YouDontHaveOrder() {
    const navigate = useNavigate();
  return (
    <YouDontHaveOrderContainer>
      <BabyYoda>
        <h3>
          PARECE QUE VOCÊ AINDA NÃO TEM NENHUM PEDIDO REALIZADO, QUE TAL COMPRAR UM TICKET AGORA MESMO?
        </h3>
        
        <Lottie
          loop
          animationData={babyYoda}
          play
          style={{ width: 300, height: 300 }}
        />
        <br />
        <button onClick={() => navigate("/")}>COMPRAR UM TICKET AGORA MESMO.</button>
        <br />
        <tt>TODOS DOS DIREITOS RESERVADOS - PROTEÇÃO DE REDE <strong>STARLINK</strong></tt>
      </BabyYoda>
     
      <img className="background" src={bgImage} alt="Nave no espaço" />
    </YouDontHaveOrderContainer>
  );
}

const BabyYoda = styled.div`
  width: 100vw;
  padding: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    padding: 2rem;
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
  }
  button{
    padding: 1rem;
    background-color: #f82b4b;
    border-radius: 8px;
    border: thin solid #f82b4b;
    font-weight: 600;
    color: #fff;

    &:hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px rgba(255,0,100, 0.4);
    }
  }
  tt{
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 300;

  }
`;
const YouDontHaveOrderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

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
`;
