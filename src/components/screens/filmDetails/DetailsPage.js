import React from "react";
import styled from "styled-components";
import FilmOverview from "./FilmOverview";

import FilmPoster from "./FilmPoster";
import OptionsLeft from "./OptionsLeft";

export default function DetailsPage() {
  return (
    <DetailsPageContainer>
      <FilmPoster />
      <OptionsLeft />
      
      <FilmOverview />
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
