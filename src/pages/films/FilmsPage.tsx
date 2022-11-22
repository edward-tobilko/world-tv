import "./films.scss";

import Error from "../../components/error/Error";
import Loader from "../../components/loader/Loader";
import MovieSwiper from "../../components/swipers/MovieSwiper";
import MovieGenresSelect from "../../components/selects/MovieGenresSelect";
import Footer from "../../components/footer/Footer";
import FilmsPageCinemaStudio from "./FilmsPageCinemaStudio";
import FilmsPageList from "./FilmsPageList";

import { useGetMoviesQuery } from "../../api/movieAPI";

const FilmsPage = () => {
  const { data, isFetching, isError } = useGetMoviesQuery([]);

  if (isFetching) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className="filmsPage">
      <h1 className="filmsPage__title container">Watch movies online</h1>
      <MovieSwiper />
      <MovieGenresSelect />
      <FilmsPageList list={data} />
      <FilmsPageCinemaStudio />
      <Footer />
    </div>
  );
};

export default FilmsPage;
