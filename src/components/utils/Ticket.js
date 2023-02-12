import React from "react";
import styled from "styled-components";

export default function Ticket(){
    return(
        <MyTicketsOrders>
        <TicketResume>
          <DataTicket>
            <h3>
              Filme: <strong>Gemini o planeta sombrio</strong>
            </h3>
            <h3>
              Classificação: <strong>12 anos</strong>
            </h3>
            <h3>
              Sessão: <strong>14:20H - SALA 2</strong>
            </h3>
            <h3>
              Poltronas: <strong>41, 42, 43</strong>
            </h3>
            <h3>
              Valor do Pedido: <strong>75,00R$</strong>
            </h3>
          </DataTicket>
          <InfoFilm>
            <img src="https://br.web.img2.acsta.net/c_310_420/pictures/23/01/04/17/26/0928174.jpg" alt="Nave no espaço" />
          </InfoFilm>
        </TicketResume>
      </MyTicketsOrders>
    )
}

const DataTicket = styled.div`
  width: 70%;
`;
const InfoFilm = styled.div`
  width: 20%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  }
`;
const TicketResume = styled.div`
  min-width: 640px;
  min-height: 265px;

  width: 50vw;
  height: 40vh;
  display: flex;
  padding: 6rem;
  justify-content: space-around;
  align-items: center;

  position: relative;

  background-image: url("https://github.com/Pedro-Hen46/jediflix-front/blob/main/src/lib/images/ticket.png?raw=true");
  background-size: 100% 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1366px) {
    padding: 3rem;
    h3 {
      color: #000;
      margin-bottom: 10px !important;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  strong {
    font-weight: 700;
  }
`;
const MyTicketsOrders = styled.div`
  width: 60vw;
  margin-left: 20vw;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;