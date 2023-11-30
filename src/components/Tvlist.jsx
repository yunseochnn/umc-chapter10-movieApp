import React from "react";
import { useNavigate } from "react-router-dom";

export const URL = "https://image.tmdb.org/t/p/original/";

export default function Tvlist(props) {
  const navigate = useNavigate();

  const onClickMovieItem = () => {
    navigate(`/movie/${props.name}`, {
      state: props,
    });
  };

  return (
    <div className="movie-poster" onClick={onClickMovieItem}>
      <img src={URL + props.poster_path} alt="영화포스터" />
      <div className="decsript">
        <h2>{props.name}</h2>
        <p>{props.vote_average}</p>
      </div>
    </div>
  );
}
