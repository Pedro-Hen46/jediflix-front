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
        font-size: 1rem;
        text-align: center;
    }

`