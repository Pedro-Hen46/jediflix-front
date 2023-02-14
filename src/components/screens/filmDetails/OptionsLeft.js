import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

import { MagnifyingGlass } from "react-loader-spinner";
import ModalCancelOrder from "../../utils/ModalCancelOrder";
import YoutubeTrailerModal from "../../utils/YoutubeTrailerModal";

export default function OptionsLeft({ infoFilm }) {
  const navigate = useNavigate();

  const [control, setControl] = useState(false);
  const [trailerPlayer, setTrailerPlayer] = useState(false);
  const [favorit, setFavorit] = useState([]);

  return (
    <>
      {infoFilm.film === undefined ? (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#f82b4b"
        />
      ) : (
        <OptionsLeftContainer>
          {control ? <ModalCancelOrder setControl={setControl} /> : <></>}
          <img
            src={infoFilm.film.frontCover}
            title={infoFilm.film.name}
            alt={infoFilm.film.name}
          />

          <div className="favorit" onClick={() => localStorage.setItem("@favorits", infoFilm.film.id)}>
            <BiHeart size={30} />
            <h5>Adicionar nos Favoritos</h5>
          </div>

          <h3>
            Valor por Ingresso:{" "}
            <strong> R${infoFilm.film.priceTicket},00</strong>
          </h3>

          {trailerPlayer ? (
            <YoutubeTrailerModal
              infoFilm={infoFilm}
              setTrailerPlayer={setTrailerPlayer}
            />
          ) : (
            <></>
          )}
          <ButtonTrailer onClick={() => setTrailerPlayer(true)}>
            TRAILER
          </ButtonTrailer>

          <button onClick={() => setControl(true)}>CANCELAR</button>
        </OptionsLeftContainer>
      )}
    </>
  );
}
const ButtonTrailer = styled.div`
  background-color: #f82b4b;
  width: 80%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #161831;
  font-weight: 700;
  letter-spacing: 1.2px;
  font-size: 1.4rem;
  margin-top: 1rem;

  transition: 0.3s linear;
  &:hover {
    cursor: pointer;
    color: white;
    box-shadow: 0px 0px 25px rgba(255, 0, 0, 0.4);
  }
`;
const OptionsLeftContainer = styled.div`
  width: 20vw;
  height: 100vh;
  padding: 0.4rem;

  position: fixed;
  top: 0;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .favorit{
    width: 100%;
    margin-bottom: 10px;
    margin-top: 10px;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s linear;

    &:hover{
      color: #f82b4b;
      cursor: pointer;
    }
  }

  img {
    margin-top: 3rem;
    margin-bottom: 1rem;
    object-fit: cover;
    width: 13rem;
    height: 20rem;

    border-radius: 6px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s linear;

    &:hover {
      box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.4);
      cursor: pointer;
    }
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
