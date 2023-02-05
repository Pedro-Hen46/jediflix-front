import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilmOverview from "./FilmOverview";
import axios from "axios";

import FilmPoster from "./FilmPoster";
import OptionsLeft from "./OptionsLeft";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const SERVER_URL = process.env.REACT_APP_SERVER;
  const [infoFilm, setInfoFilm] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    const promise = axios.get(`${SERVER_URL}/film/${filmId}`);

    promise.then((response) => {
      setInfoFilm(response.data);
    });
  }, []);

  return (
    <DetailsPageContainer>
      <FilmPoster infoFilm={infoFilm} />
      <OptionsLeft infoFilm={infoFilm} />
      <FilmOverview infoFilm={infoFilm} />
    </DetailsPageContainer>
  );
}

const DetailsPageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  display: flex;
  background-color: #161831;
  justify-content: center;
  align-items: center;
`;
