import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FrontCover({film}){
   
    return(
        <FrontCoverImg>
            <Link to={`/film/${film.id}`}>
                <img src={film.frontCover} alt={film.name} title={film.name}/>            
            </Link>
        </FrontCoverImg>
    )
}

const FrontCoverImg = styled.div`    
    img{
        object-fit: contain;
        width: 10rem;
        height: 14rem;  
        margin-right: 40px;
        margin-bottom: 30px;

        border-radius: 6px;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
        transition: 0.3s linear;

        &:hover{
            box-shadow: 0px 0px 20px rgba(255,0,0,0.4);
            cursor: pointer;
        }
    }



`