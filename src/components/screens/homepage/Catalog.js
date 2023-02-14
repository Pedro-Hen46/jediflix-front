import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";

import bgImage from "../../../lib/images/background.jpg";
import yodaApresentation from "../../../lib/images/yodaApresentation.png";
import FrontCover from "./FrontCover";
import LoadingAnimation from "../../utils/LoadingAnimation";
import NotExistsContent from "../../utils/NotExistsContent";

export default function Catalog() {
  dotenv.config();
  const SERVER_URL = process.env.REACT_APP_SERVER;

  const [filmsData, setFilmsData] = useState([]);
  const [getCategorys, setCategorysData] = useState([]);
  const [loading, setLoading] = useState(false);

  function gettingCategoriesAvailable(films) {
    const arrCategories = [];
    films.map((item) => {
      const exists = arrCategories.find(
        (category) => category === item.category
      );

      if (!exists) {
        arrCategories.push(item.category);
      }
    });

    return arrCategories;
  }

  function filterByCategory(categoryMenu) {
    const promise = axios.get(`${SERVER_URL}/films/${categoryMenu}`);

    promise.then((response) => {
      setFilmsData(response.data);
    });

    promise.catch((err) => {
      console.log(err.message);
    });
  }

  useEffect(() => {
    setLoading(true);
    const promise = axios.get(`${SERVER_URL}/films`);

    promise.then((response) => {
      setLoading(false);
      setFilmsData(response.data);
      setCategorysData(gettingCategoriesAvailable(response.data));
    });
    promise.finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <CatalogContainer>
        {loading ? <LoadingAnimation /> : <></>}
        {filmsData.length === 0 ? (
          <></>
        ) : (
          <>
            {/* <Apresentation>
              <img
                src={yodaApresentation}
                alt="Yoda segurando um sabre de luz"
              />
              <span>
                "OLÁ JEDI, TUDO BEM? INFELIZMENTE A NAVE ESTÁ PASSANDO POR
                ALGUNS PROBLEMAS, ENTÃO SUA VIAGEM IRÁ ATRASAR UM POUCO,
                ENQUANDO ISSO VOCÊ PODE SELECIONAR UM FILME PARA GARANTIR A SUA
                POLTRONA."
              </span>
            </Apresentation> */}
          </>
        )}
        <CategoriesAvaiable>
          <span onClick={() => filterByCategory(" ")}>Todos</span>
          {getCategorys.map((category, index) => (
            <span key={index} onClick={(value) => filterByCategory(category)}>
              {category}
            </span>
          ))}
        </CategoriesAvaiable>
        <FrontCovers>
          {filmsData.length === 0 && loading === false ? (
            <NotExistsContent />
          ) : (
            filmsData.map((film, index) => (
              <FrontCover film={film} key={index} />
            ))
          )}
        </FrontCovers>
        <img className="background" src={bgImage} alt="Nave no espaço" />
      </CatalogContainer>
    </>
  );
}
const Apresentation = styled.div`
  padding: 4rem;
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 10%;
    height: 100%;
    object-fit: contain;
    border-radius: 100%;
    margin-right: 5%;

    box-shadow: 0px 0px 40px rgba(0, 200, 0, 0.7);
  }
  span {
    width: 40vw;
    font-weight: 700 !important;
  }
`;
const CategoriesAvaiable = styled.div`
  width: 100vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  padding: 1.5rem;

  span {
    font-weight: 600 !important;
    :hover {
      cursor: pointer;
      font-weight: 800 !important;
    }
  }
`;
const FrontCovers = styled.div`
  width: 100%;
  height: 68vh;
  padding: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

    filter: brightness(0.2);
    -webkit-mask-image: linear-gradient(to top, transparent 25%, #161831 100%);
  }
`;
