import CartoonDetailsRelatedItem from "./CartoonDetailsRelatedItem";

const CartoonDetailsRelatedList = ({ relatedList }: any) => {
  return (
    <div className="movie__details-related__movies">
      {relatedList?.length ? (
        <div className="filmsPage__content">
          {relatedList?.slice(0, 5)?.map((reletedMovie: any) => (
            <CartoonDetailsRelatedItem
              relatedItem={reletedMovie}
              key={reletedMovie?.id}
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

export default CartoonDetailsRelatedList;
