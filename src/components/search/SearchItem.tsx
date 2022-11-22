import { useNavigate } from "react-router-dom";

import notFoundImage from "../../img/image-not-found.png";

const SearchItem = ({
  searchMovie,
  setSearchInput,
  setDropdownMenu,
  setShowSearchField,
}: any) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/movie/${searchMovie?.id}`);
    setShowSearchField(false);
    setDropdownMenu(false);
    setSearchInput("");
  };

  return (
    <div className="search__menu-list" onClick={handleNavigate}>
      <img
        src={searchMovie?.i?.imageUrl || notFoundImage}
        alt={searchMovie?.l}
        className="search__menu-list__img"
      />
      <div className="search__menu-list__desc">
        <h4>{searchMovie?.l}</h4>
        {searchMovie?.y && searchMovie?.qid ? (
          <p>
            {searchMovie?.y},<span> {searchMovie?.qid} </span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchItem;
