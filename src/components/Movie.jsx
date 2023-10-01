import React, { useState } from "react";

function Movie(props) {
  const { data } = props;
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const handleMouseEnter = () => {
    setDescriptionVisible(true);
  };

  const handleMouseLeave = () => {
    setDescriptionVisible(false);
  };

  return (
    <div
      className="movie-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="movie">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt={`${data.title} 이미지`}
        />
        <div className="mousehover">
          {isDescriptionVisible && <p>{data.overview}</p>}
        </div>
        <div className="descript">
          <h2>{data.title}</h2>

          <p>{data.vote_average}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
