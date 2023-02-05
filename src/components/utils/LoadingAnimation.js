import React from "react";
import styled from "styled-components";

import Lottie from "react-lottie-player";
import babyYoda from "../../lib/svg/baby.json";

export default function LoadingAnimation() {
  return (
    <LoadingProcess>
        <Lottie
          loop
          animationData={babyYoda}
          play
          style={{ width: 400, height: 400 }}
        />
        <h3>Aguarde mestre Yoda buscando as informações...</h3>
    </LoadingProcess>
  );
}

const LoadingProcess = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 1 !important;
  backdrop-filter: blur(1px);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-top: -3.5rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
  }
`;