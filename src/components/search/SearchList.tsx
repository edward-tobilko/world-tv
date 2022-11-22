import SearchItem from "./SearchItem";

const SearchList = ({
  searchData,
  setSearchInput,
  setDropdownMenu,
  setShowSearchField,
}: any) => {
  return (
    <>
      {searchData?.map((searchMovie: any) => (
        <SearchItem
          key={searchMovie?.id}
          searchMovie={searchMovie}
          setSearchInput={setSearchInput}
          setDropdownMenu={setDropdownMenu}
          setShowSearchField={setShowSearchField}
        />
      ))}
    </>
  );
};

export default SearchList;
