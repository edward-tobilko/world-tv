import { useState } from "react";
import "./movie-genres-select.scss";

import { movieGenresData } from "../../data/data";

const MovieGenresSelect = () => {
  const [genreItem, setGenreItem] = useState("");

  const handleGenre = (event: any) => {
    setGenreItem(event.target.value);
  };

  const titleGenre = movieGenresData.find(
    ({ value }) => value === genreItem,
  )?.title;

  return (
    <div className="movie__select container">
      <h1 className="movie__select-title">
        {genreItem ? titleGenre : "Action"}
      </h1>
      <select
        className="movie__select-select"
        onChange={handleGenre}
        value={genreItem || "Action"}
      >
        {movieGenresData.map((movieGenre) => (
          <option
            className="movie__select-select__option"
            key={movieGenre.value}
            value={movieGenre.value}
          >
            {movieGenre.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieGenresSelect;
