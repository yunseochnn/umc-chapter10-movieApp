import React from "react";
import Movie from "../components/Movie";
import { movies } from "../movieDummy";

export default function Movies() {
  return (
    <div className="movies-container">
      {movies.results.map((item) => {
        return (
          <Movie
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        );
      })}
    </div>
  );
}
