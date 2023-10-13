import React, { useState } from "react";
import styled from "styled-components";

const MovieContainer = styled.div`
  background-color: rgb(0, 0, 63);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &:hover {
    .mousehover {
      opacity: 1;
    }
  }
`;

const MovieCard = styled.div`
  background-color: rgb(57, 57, 159);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 10px 10px 20px 10px;
  width: 200px;
`;

const MoviePoster = styled.img`
  width: 200px;
  height: auto;
`;

const Description = styled.div`
  color: white;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 8px;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  width: 140px;
`;

const MouseHover = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  padding: 8px;
  text-align: center;
  opacity: 0;
  font-size: 12px;
`;

const Movie = (props) => {
  const { data } = props;
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const handleMouseEnter = () => {
    setDescriptionVisible(true);
  };

  const handleMouseLeave = () => {
    setDescriptionVisible(false);
  };

  return (
    <MovieContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MovieCard>
        <MoviePoster
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/original${data.poster_path}`
              : ""
          }
          alt={`${data.title} 이미지`}
        />

        <MouseHover className="mousehover">
          {isDescriptionVisible && <p>{data.overview}</p>}
        </MouseHover>
        <Description>
          <Title>{data.title}</Title>
          <p>{data.vote_average}</p>
        </Description>
      </MovieCard>
    </MovieContainer>
  );
};

export default Movie;
