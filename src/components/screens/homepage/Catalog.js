import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
import Lottie from "react-lottie";

import animationData from "../../../lib/svg/baby.json";
import bgImage from "../../../lib/images/background.jpg";
import FilmCase from "./FilmCase";

export default function Catalog() {
  dotenv.config();
  const SERVER_URL = process.env.REACT_APP_SERVER;

  const [filmsData, setFilmsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    setLoading(true);
    const promise = axios.get(`${SERVER_URL}/films`);

    promise.then((response) => {
        setLoading(false);
        setFilmsData(response.data);
    });
    promise.finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <CatalogContainer>
      <span>
        OLÁ JEDI, TUDO BEM? INFELIZMENTE A NAVE ESTÁ PASSANDO POR ALGUNS
        PROBLEMAS, ENTÃO SUA VIAGEM IRÁ ATRASAR UM POUCO, ENQUANDO ISSO VOCÊ
        PODE SELECIONAR UM FILME PARA GARANTIR A SUA POLTRONA.
      </span>
      
      {loading === false ? (
        <></>
      ) : (
        <LoadingProcess>
          <Lottie options={defaultOptions} height={400} width={400} />
          <h3>AGUARDE ESTOU BUSCANDO OS DADOS...</h3>
        </LoadingProcess>
      )}

      <FrontCovers>
        {filmsData.length === 1 ? (
          <></>
        ) : (
          filmsData.map((film) => <FilmCase film={film} />)
        )}
      </FrontCovers>

      <img className="background" src={bgImage} alt="Nave no espaço" />
    </CatalogContainer>
  );
}
const LoadingProcess = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 1 !important;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-top: -3.5rem;
    color: #fff;
    text-align: center;
  }
`;

const FrontCovers = styled.div`
  width: 100%;
  height: 600px;
  padding: 3rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;
const CatalogContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #fff;
    text-align: center;
    font-family: "Poppins";
    font-weight: 400;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    text-align: center;
  }

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: red;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;

    filter: brightness(0.7);
    -webkit-mask-image: linear-gradient(to top, transparent 25%, #161831 100%);
  }
`;
