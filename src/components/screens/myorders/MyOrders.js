import React from "react";
import styled from "styled-components";

import bgImage from "../../../lib/images/background.jpg";
import ticketImage from "../../../lib/images/ticket.png";
export default function MyOrders() {
  return (
    <MyOrdersContainer>
      <BabyYoda>
        <h1>oi</h1>
      </BabyYoda>
      <MyTicketsOrders>
        <Ticket>
          {/* <img src={ticketImage} title="Ticket" alt="Ticket" /> */}
          <h3>Gemini o planeta sombrio</h3>
        </Ticket>
      </MyTicketsOrders>
      <img className="background" src={bgImage} alt="Nave no espaço" />
    </MyOrdersContainer>
  );
}
const Ticket = styled.div`
  width: 40vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("./ticket.png");

  img{
    width: 100%;
    z-index: 0;
    position: relative;

  }
  h3{
    position: absolute;
    top: 0;
  }
`;
const BabyYoda = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MyTicketsOrders = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MyOrdersContainer = styled.div`
  width: 100vw;
  height: 100vh;

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
