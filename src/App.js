import React from "react";
import Movie from "./components/Movie";
import { movies } from "./movieDummy.js";
import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return <Movie key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
