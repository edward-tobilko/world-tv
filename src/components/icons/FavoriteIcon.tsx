const FavoriteIcon = ({ favorites }: any) => {
  return (
    <>
      {favorites.length > 0 ? (
        <div className="favorites__count"> {favorites.length} </div>
      ) : null}
    </>
  );
};

export default FavoriteIcon;
