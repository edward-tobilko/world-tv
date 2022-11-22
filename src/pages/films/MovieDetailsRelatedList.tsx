import MovieDetailsRelatedItem from "./MovieDetailsRelatedItem";

const MovieDetailsRelatedList = ({ relatedList }: any) => {
  return (
    <div className="movie__details-related__movies">
      {relatedList?.length ? (
        <div className="filmsPage__content">
          {relatedList?.slice(0, 5)?.map((reletedCartoon: any) => (
            <MovieDetailsRelatedItem
              relatedItem={reletedCartoon}
              key={reletedCartoon?.id}
            />
          ))}
        </div>
      ) : (
        <div className="filmsPage__error">
          No movies with this genre found! <br />
          Please try another genre...
        </div>
      )}
    </div>
  );
};

export default MovieDetailsRelatedList;
