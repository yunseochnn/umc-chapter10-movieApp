import React from "react";
import { tv } from "../tvDummy";
import Tvlists from "../components/Tvlist";

export default function Tv() {
  return (
    <div className="movies-container">
      {tv.results.map((item) => {
        return (
          <Tvlists
            name={item.name}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        );
      })}
    </div>
  );
}
