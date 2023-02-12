import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import FilmOverview from "./FilmOverview";
import FilmPoster from "./FilmPoster";
import OptionsLeft from "./OptionsLeft";
import LoadingAnimation from "../../utils/LoadingAnimation";

export default function DetailsPage() {
  const SERVER_URL = process.env.REACT_APP_SERVER;
  const { filmId } = useParams();

  const [infoFilm, setInfoFilm] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const promise = axios.get(`${SERVER_URL}/film/${filmId}`);
    setLoading(true);

    promise.then((response) => {
      setInfoFilm(response.data);
      setLoading(false);
    });

    promise.catch((err) => {
      console.log(err.message);
      setLoading(false);
    });
  }, []);

  return (
    <DetailsPageContainer loading={loading}>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
          <FilmPoster infoFilm={infoFilm} />
          <OptionsLeft infoFilm={infoFilm} />
          <FilmOverview infoFilm={infoFilm} />
        </>
      )}
    </DetailsPageContainer>
  );
}

const DetailsPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;


  display: flex;
  background-color: #161831;
  justify-content: center;
  align-items: center;
`;
