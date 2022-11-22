import FilmsPageItem from "./FilmsPageItem";

const FilmsPageList = ({ list }: any) => {
  return (
    <>
      {list?.length ? (
        <div className="filmsPage__content container">
          {list?.map((movie: any) => (
            <FilmsPageItem key={movie?.id} item={movie} />
          ))}
        </div>
      ) : (
        <div className="filmsPage__error">
          No movies with this genre found! <br />
          Please try another genre...
        </div>
      )}
    </>
  );
};

export default FilmsPageList;
