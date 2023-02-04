import React from "react";
import styled from "styled-components";
import FilmCase from "./FilmCase";

export default function Catalog(){

    let data = [
        {
            name: 'Gemini: O Planeta Sombrio',
            image: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/01/04/17/26/0928174.jpg'
        }
    ];

    return(
        <CatalogContainer>
            <span>OLÁ JEDI, TUDO BEM? INFELIZMENTE A NAVE ESTÁ PASSANDO POR ALGUNS PROBLEMAS, ENTÃO SUA VIAGEM IRÁ ATRASAR UM POUCO, ENQUANDO ISSO VOCÊ PODE SELECIONAR UM FILME PARA GARANTIR A SUA POLTRONA.</span>
            <FrontCover>
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
                <FilmCase data={data} />
            </FrontCover>

            <img className="background" src="https://www.pixelstalk.net/wp-content/uploads/images6/Star-Wars-Space-Background-Free-Download.jpg" alt="Nave no espaço" />
        </CatalogContainer>
    )
}

const FrontCover = styled.div`
    width: 100%;
    height: 600px;   
    padding: 3rem;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const CatalogContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span{
        color: #fff;
        text-align: center;
        font-family: "Poppins";
        font-weight: 400;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.6);
        font-size: 1rem;
        text-align: center;
    }

    .background{
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

`