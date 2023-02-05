import React from "react";
import styled from "styled-components";

export default function FilmPoster() {
  return (
    <FilmPosterContainer>
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5Vp4VE2-vh80bjk5n9e5k_1MWT3jOG9OHnonjGuGmoRg3UFyCB9arQpCJKaHU94CmypzyGdcDhbRLZbmxwqjKBitz4WqzOJUoyIrnP-Mn8BcUqf_FpAx0w7hlyBsduWcqIgywMl0WPmKPDLP6qd_-nTya1QVcbi25o9iaFSht6k6ihd7o0BqyTtdkrQ/s1024/Gemini-O-Planeta-Sombrio_Condor-Distribution%20(6).JPG"
        title="Gemini"
        alt="Gemini"
      />
      <h1>Gemini: O Planeta Sombrio</h1>
      <br />
      <h3>
        Categoria: <strong>Ficção Cientifica, Horror</strong>
      </h3>
      <div>
        <h3>
          Data de Lançamento: <strong>12 de Fevereiro 2023</strong>
        </h3>
        <h3>
          Duração do Filme: <strong>1H42M</strong>
        </h3>
        <h3>
          Classificação: <strong>12 anos</strong>
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
  padding-left: 20rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-image: url(${(props) => props.imageUrl});
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    object-position: 50% 10%;

    filter: brightness(0.7);
    -webkit-mask-image: linear-gradient(to top, transparent 1%, black 100%);
  }

  h1 {
    z-index: 1;
    color: white;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1.2px;
  }
  h3 {
    z-index: 1;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 300;
    
    margin-right: 20px;
  }
  strong {
    z-index: 1;
    font-weight: 500;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    
  }
`;
