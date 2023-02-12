import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FrontCover({ film }) {
  return (
    <FrontCoverImg>
      <Link to={`/film/${film.id}`}>
        <img src={film.frontCover} alt={film.name} title={film.name} />
        <tt><strong>{film.name}</strong></tt>
        <tt>R$ {film.priceTicket},00</tt>
      </Link>
    </FrontCoverImg>
  );
}

const FrontCoverImg = styled.div`
  width: 15rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  tt {
    font-size: 0.8rem;
    color: #fff;

    display: -webkit-box;
    max-width: 250px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  strong{
    font-size: 0.7rem;
    font-weight: 800;
   letter-spacing: 1px;
   text-transform: uppercase;
  }
  img {
    object-fit: cover;
    width: 13rem;
    height: 20rem;

    border-radius: 6px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s linear;

    &:hover {
      box-shadow: 0px 0px 20px rgba(255, 0, 0, 0.4);
      cursor: pointer;
    }
  }
`;
