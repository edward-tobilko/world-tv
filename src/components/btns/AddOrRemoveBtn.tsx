import React from "react";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../redux/store";

const AddOrRemoveBtn = ({ DATA }: any) => {
  const { favorites } = useAppSelector((state) => state.movie);

  const { addFavoriteMovie, removeFavoriteMovie } = useActions();

  const isItemInBasket = favorites.some((item) => item.id === DATA?.id);

  const addOrRemoveMovieToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();

    if (isItemInBasket) {
      removeFavoriteMovie(DATA?.id);
    } else {
      addFavoriteMovie(DATA);
    }
  };

  return (
    <button
      className="movie__details-content__desc-footer__right-favorite"
      onClick={addOrRemoveMovieToCart}
    >
      {!isItemInBasket ? "Add to Favorite" : "Remove from Favorite"}
    </button>
  );
};

export default AddOrRemoveBtn;
