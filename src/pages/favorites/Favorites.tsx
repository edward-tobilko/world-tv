// import { useState } from "react";
import "./favorites.scss";

import { useAppSelector } from "../../redux/store";
import FilmsPageItem from "../films/FilmsPageItem";

const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.movie);
  // const [isFavorite, setIsFavorite] = useState(favorites);

  return (
    <div className="container">
      <h1 className="movie__details-title favorite__title">
        The films I've chosen
      </h1>
      {favorites?.length === 0 ? (
        <div className="filmsPage__error">Empty</div>
      ) : (
        <div className="filmsPage__content container">
          {favorites?.map((movie: any, index: number) => (
            <>
              <FilmsPageItem
                key={movie?.id}
                item={movie}
                // isFavorite={isFavorite}
                // setIsFavorite={setIsFavorite}
              />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
