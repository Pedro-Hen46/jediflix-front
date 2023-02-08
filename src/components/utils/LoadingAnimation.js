import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Lottie from "react-lottie-player";
import babyYoda from "../../lib/svg/baby.json";
import bb8 from "../../lib/svg/bb8.json";

export default function LoadingAnimation() {
  const [controlLoading, setControlLoading] = useState(false);
  const arrLoading = [
    {
      name: "babyYoda",
      message: [
        "Baby yoda está canalizando a sua força...",
        "Aguarde, eu ainda sou baby yoda, estou aprendendo a força !",
        "Buaaaaaahhhh! Estou buscando mais rápido que posso.",
        "Estou calculando a força para vc, aguarde por favor."
      ],
    },
    {
      name: "bb8",
      message: [
        "bb8 está correndo rapido demais para encontrar os dados...",
        "bb8 está girando o mais rápido que pode...",
        "Aguarde um segundo, os Jedi's estão demorando um pouco para responder...",
      ],
    },
  ];

  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];
    return item;
  }

  useEffect(() => {
    setControlLoading(getRandomItem(arrLoading));
  }, []);
  let data = ""
  if (controlLoading.message !== undefined) {
    data = getRandomItem(controlLoading.message);
    
    
  }
  
  return (
    <>
      {controlLoading === {} ? (
        <></>
      ) : (
        <LoadingProcess>
          <Lottie
            loop
            animationData={controlLoading.name === "bb8" ? bb8 : babyYoda }
            play
            speed={controlLoading.name === "bb8" ? 2.3 : 1}
            style={{ width: controlLoading.name === "bb8" ? 500 : 400, height: controlLoading.name === "bb8" ? 500 : 400 }}
          />
          <h3>{data}</h3>
        </LoadingProcess>
      )}
    </>
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
