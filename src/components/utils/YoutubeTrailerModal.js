import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

export default function YoutubeTrailerModal({ infoFilm, setTrailerPlayer }) {

  return (
    <Container onClick={() => setTrailerPlayer(false)}>
      <Player>
        <ReactPlayer
          url={infoFilm.film.trailerUrl}
          title="Trailer do filme"
          width="100%"
          height="100%"
          
        />
      </Player>
      <h4>
        Para fechar o player clique fora do video.
      </h4>
    </Container>
  );
}
const Player = styled.div`
  width: 70vw;
  height: 75vh;
  border-radius: 8px;

  transition: 0.3s linear;
  :hover{
    box-shadow: 0px 0px 40px rgba(255, 0, 100, 0.5);
  }
`;
const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2.5px);

  &:hover {
    cursor: default;
  }

  h4 {
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1rem;
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
`;
