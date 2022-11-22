import "./tvshows.scss";

import TvShowsSwiper from "../../components/swipers/TvShowsSwiper";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";
import TvShowsFantasy from "./TvShowsFantasy";
import TvShowsRomance from "./TvShowsRomance";
import TvShowsCrime from "./TvShowsCrime";
import Footer from "../../components/footer/Footer";

import {
  useGetTvshowFantasyQuery,
  useGetTvshowRomanceQuery,
  useGetTvshowCrimeQuery,
} from "../../api/movieAPI";

const TvShows = () => {
  const {
    data: fantasyData,
    isFetching: isFetchingFantasy,
    isError: isErrorFantasy,
  } = useGetTvshowFantasyQuery([]);

  const {
    data: romanceData,
    isFetching: isFetchingRomance,
    isError: isErrorRomance,
  } = useGetTvshowRomanceQuery([]);

  const {
    data: crimeData,
    isFetching: isFetchingCrime,
    isError: isErrorCrime,
  } = useGetTvshowCrimeQuery([]);

  if (isFetchingFantasy && isFetchingRomance && isFetchingCrime)
    return <Loader />;
  if (isErrorFantasy && isErrorRomance && isErrorCrime) return <Error />;

  return (
    <>
      <div className="tvshows container">
        <h1 className="tvshows-title">Watch Tv-Shows Online</h1>
        <div className="tvshows__header">
          <div className="light__effect-tvshows"></div>
          <TvShowsSwiper />
        </div>
        <div className="tvshows__content">
          <div className="tvshows__content-list">
            <h1 className="tvshows__content-list__title">Fantasy</h1>
            <TvShowsFantasy fantasyData={fantasyData} />
          </div>
          <div className="tvshows__content-list">
            <h1 className="tvshows__content-list__title">Romance</h1>
            <TvShowsRomance romanceData={romanceData} />
          </div>
          <div className="tvshows__content-list">
            <h1 className="tvshows__content-list__title">Crime</h1>
            <TvShowsCrime crimeData={crimeData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TvShows;
