import React from "react";
import styled from "styled-components";

import Lottie from "react-lottie-player";
import babyYoda from "../../lib/svg/sadbaby.json";

export default function NotExistsContent() {
  return (
    <Container>
      <Lottie
        animationData={babyYoda}
        autoplay={true}
        play
        speed={0.6}
        loop={true}
        style={{ width: 500, height: 500 }}
      />

      <tt>
        Olá Jedi, Infelizmente não foi encontrado nenhum filme, volte novamente
        mais tarde.
      </tt>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 65vh;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  tt {
    padding: 1rem;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
`;
