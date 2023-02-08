import React from "react";
import styled from "styled-components";

export default function FilmPoster({ infoFilm }) {
  return (
    <FilmPosterContainer>
      <img
        src={infoFilm.headerImage}
        title={infoFilm.name}
        alt={infoFilm.name}
      />
      <h1>{infoFilm.name}</h1>
      <br />
      <h3>
        Categoria: <strong>{infoFilm.category}</strong>
      </h3>
      <div>
        <h3>
          Data de Lançamento: <strong>{infoFilm.productedAt}</strong>
        </h3>
        <h3>
          Duração do Filme: <strong>{infoFilm.duration}h</strong>
        </h3>
        <h3>
          Classificação:{" "}
          <strong>
            {infoFilm.ageClassification === 0
              ? "Livre para todos os públicos"
              : `${infoFilm.ageClassification} anos`}
          </strong>
        </h3>
      </div>
    </FilmPosterContainer>
  );
}

const FilmPosterContainer = styled.div`
  width: 100vw;
  height: 40vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  background-color: #161831;
  justify-content: center;
  align-items: flex-start;
  padding-left: 23.5vw;

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    object-position: 50% 10%;

    filter: brightness(0.7);
    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 100%);
  }

  h1 {
    z-index: 0;
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.2px;
  }
  h3 {
    z-index: 0;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;

    margin-right: 20px;
  }
  strong {
    z-index: 0;
    font-weight: 500;
  }
  div {
    z-index: 0;

    width: 100%;
    display: flex;
    align-items: center;
  }
`;
