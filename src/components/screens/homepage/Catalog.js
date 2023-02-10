import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";

import bgImage from "../../../lib/images/background.jpg";
import FrontCover from "./FrontCover";
import LoadingAnimation from "../../utils/LoadingAnimation";
import NotExistsContent from "../../utils/NotExistsContent";

export default function Catalog() {
  dotenv.config();
  const SERVER_URL = process.env.REACT_APP_SERVER;

  const [filmsData, setFilmsData] = useState([]);
  const [loading, setLoading] = useState(false);

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
      {loading ? <LoadingAnimation /> : <></>}
      {filmsData.length === 0 ? (
        <></>
      ) : (
        <span>
          OLÁ JEDI, TUDO BEM? INFELIZMENTE A NAVE ESTÁ PASSANDO POR ALGUNS
          PROBLEMAS, ENTÃO SUA VIAGEM IRÁ ATRASAR UM POUCO, ENQUANDO ISSO VOCÊ
          PODE SELECIONAR UM FILME PARA GARANTIR A SUA POLTRONA.
        </span>
      )}

      <FrontCovers>
        {filmsData.length === 0 ? (
         <NotExistsContent />
        ) : (
          filmsData.map((film, index) => <FrontCover film={film} key={index} />)
        )}
      </FrontCovers>

      <img className="background" src={bgImage} alt="Nave no espaço" />
    </CatalogContainer>
  );
}

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

    filter: brightness(0.5);
    -webkit-mask-image: linear-gradient(to top, transparent 25%, #161831 100%);
  }
`;
