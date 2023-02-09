import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import ModalCancelOrder from "../../utils/ModalCancelOrder";

export default function OptionsLeft({ infoFilm }) {
  const navigate = useNavigate();

  const [control, setControl] = useState(false);

  return (
    <OptionsLeftContainer>
      {control ? <ModalCancelOrder setControl={setControl} /> : <></>}
      <img
        src={infoFilm.frontCover}
        title={infoFilm.name}
        alt={infoFilm.name}
      />
      <h3>
        Valor por Ingresso: <strong> R${infoFilm.priceTicket},00</strong>
      </h3>
      
      <button onClick={() => setControl(true)}>CANCELAR</button>
    </OptionsLeftContainer>
  );
}

const OptionsLeftContainer = styled.div`
  width: 20vw;
  height: 100vh;
  padding: 1rem;

  position: fixed;
  top: 0;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  }

  h3 {
    padding-left: 1rem;
    text-align: center;
    color: #f82b4b;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;

    margin-right: 20px;
  }
  strong {
    font-size: 2rem;
  }

  button {
    position: fixed;
    bottom: 20px;
    width: 15vw;
    height: 3rem;
    border-radius: 8px;
    border: 2px solid #f82b4b;
    background-color: #161831;
    color: #f82b4b;

    transition: 0.3s linear;
    &:hover {
      background-color: rgba(255, 0, 0, 0.4);
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;
