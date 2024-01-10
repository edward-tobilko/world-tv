import { useEffect, useState } from "react";
import "./search.scss";

import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

import Error from "../error/Error";
import { useDelayInputText } from "../../hooks/delayInputTex";
import { useGetSearchMoviesQuery } from "../../api/movieAPI";
import SearchList from "./SearchList";

import loader from "../../img/loader.gif";

const Search = () => {
  const [showSearchField, setShowSearchField] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const delayInputText = useDelayInputText(searchInput);

  const {
    data: searchData,
    isFetching: isFetchingSearch,
    isError: isErrorSearch,
  } = useGetSearchMoviesQuery(delayInputText, {
    skip: delayInputText.length < 2, //? Under what conditions we don't need to make the request
  });

  useEffect(() => {
    setDropdownMenu(delayInputText.length >= 2 && searchData?.length! > 0);
  }, [delayInputText, searchData]);

  if (isErrorSearch) return <Error />;

  return (
    <div className="search">
      <div className="header__right-search">
        {!showSearchField ? (
          <FiSearch onClick={() => setShowSearchField(true)} />
        ) : (
          <>
            <div className="header__right-search-show">
              <FiSearch className="header__right-search-show-icon__search" />
              <input
                placeholder="Search movies..."
                type="text"
                className="header__right-search-show-input"
                value={searchInput}
                onChange={(event) => setSearchInput(event.target.value)}
              />
              <MdClose
                onClick={() => setShowSearchField(false)}
                className="header__right-search-show-icon__close"
              />

              {dropdownMenu && (
                <div className="search__menu">
                  {isFetchingSearch && (
                    <div className="search__menu-loading">
                      <img
                        alt="Loader"
                        src={loader}
                        className="search__menu-loading__icon"
                      />
                    </div>
                  )}
                  <SearchList
                    searchData={searchData}
                    setSearchInput={setSearchInput}
                    setDropdownMenu={setDropdownMenu}
                    setShowSearchField={setShowSearchField}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
