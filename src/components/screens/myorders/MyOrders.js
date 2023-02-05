import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";
import babyYoda from "../../../lib/svg/lovebaby.json";

import bgImage from "../../../lib/images/background.jpg";
import Ticket from "../../utils/Ticket";
export default function MyOrders() {
  return (
    <MyOrdersContainer>
      <BabyYoda>
        <h3>
          PARABENS JEDI, AGORA BASTA AGUARDAR O FUNCIONAMENTO DA NAVE E
          COMPARECER NO LOCAL E NA DATA DO SEU TICKET!
        </h3>
        
        <Lottie
          loop
          animationData={babyYoda}
          play
          style={{ width: 300, height: 300 }}
        />
        <br />
        <br />
        <br />
        <br />
        <tt>TODOS DOS DIREITOS RESERVADOS - PROTEÇÃO DE REDE <strong>STARLINK</strong></tt>
      </BabyYoda>
      <TicketsContainer>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </TicketsContainer>
      <img className="background" src={bgImage} alt="Nave no espaço" />
    </MyOrdersContainer>
  );
}
const TicketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 100vh;
  margin-top: 4rem;
`;
const BabyYoda = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 40vw;
  padding: 4rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
  }
  tt{
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 300;

  }
`;
const MyOrdersContainer = styled.div`
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
