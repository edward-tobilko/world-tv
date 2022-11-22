import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetReviewsQuery,
  useGetDetailsQuery,
  useGetImagesQuery,
  useGetOverviewDetalilsQuery,
  useGetRelatedMoviesQuery,
} from "../../api/movieAPI";

import Error from "../../components/error/Error";
import Loader from "../../components/loader/Loader";

import notFoundImage from "../../img/image-not-found.png";
import devices from "../../img/svg/devices.svg";
import hd from "../../img/svg/hd.svg";
import noads from "../../img/svg/noads.svg";
import timeshift from "../../img/svg/timeshift.svg";

import { TiArrowBackOutline } from "react-icons/ti";
import MovieDetailsSwiper from "../../components/swipers/MovieDetailsSwiper";
import Footer from "../../components/footer/Footer";
import MovieDetailsRelatedList from "./MovieDetailsRelatedList";
import AddOrRemoveBtn from "../../components/btns/AddOrRemoveBtn";

const MovieDetails: FC = () => {
  const {
    id: overviewDetailsId,
    id: detailsId,
    id: movieImagesId,
    id: reviewId,
  } = useParams();

  const {
    data: movieDetails,
    isFetching: isFetchingMovieDetails,
    isError: isErrorMovieDetails,
  } = useGetDetailsQuery(detailsId || "");

  let DATA = movieDetails?.d[0];

  const navigate = useNavigate();

  const { data, isFetching, isError } = useGetOverviewDetalilsQuery(
    overviewDetailsId || "",
  );

  const {
    data: movieImages,
    isError: movieImagesError,
    isFetching: movieImagesFetching,
  } = useGetImagesQuery(movieImagesId || "");

  const { review } = useGetReviewsQuery(reviewId, {
    selectFromResult: ({ data }) => ({
      review: data?.review,
    }),
  });

  const {
    data: relatedMovies,
    isFetching: relatedMoviesFetching,
    isError: relatedMoviesError,
  } = useGetRelatedMoviesQuery([]);

  if (
    isFetching &&
    isFetchingMovieDetails &&
    movieImagesFetching &&
    relatedMoviesFetching
  )
    return <Loader />;
  if (isError && isErrorMovieDetails && movieImagesError && relatedMoviesError)
    return <Error />;

  return (
    <>
      <div className="movie__details container">
        <TiArrowBackOutline
          className="goback__btn"
          onClick={() => navigate("/films-page")}
        />
        <h1 className="movie__details-title">
          {data?.title?.titleType}: <span> {data?.title?.title} </span>
        </h1>

        <div className="movie__details-content">
          <div className="movie__details-content__desc">
            <div className="movie__details-content__desc-raw">
              <p className="movie__details-content__desc-raw-title">
                Release Date
              </p>
              <p className="movie__details-content__desc-raw-subtitle">
                {data?.releaseDate}
              </p>
            </div>
            <div className="movie__details-content__desc-raw">
              <p className="movie__details-content__desc-raw-title">Rate</p>
              <p className="movie__details-content__desc-raw-subtitle">
                <svg
                  height="40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 575 289.83000000000004"
                >
                  <defs>
                    <path
                      id="a"
                      d="M575 24.91C573.44 12.15 563.97 1.98 551.91 0H23.32C10.11 2.17 0 14.16 0 28.61v232.25c0 16 12.37 28.97 27.64 28.97h519.95c14.06 0 25.67-11.01 27.41-25.26V24.91z"
                    />
                    <path id="b" d="M69.35 58.24h45.63v175.65H69.35z" />
                    <path
                      id="c"
                      d="M201.2 139.15c-3.92-26.77-6.1-41.65-6.53-44.62-1.91-14.33-3.73-26.8-5.47-37.44h-59.16v175.65h39.97l.14-115.98 16.82 115.98h28.47l15.95-118.56.15 118.56h39.84V57.09h-59.61z"
                    />
                    <path
                      id="d"
                      d="M346.71 93.63c.5 2.24.76 7.32.76 15.26v68.1c0 11.69-.76 18.85-2.27 21.49-1.52 2.64-5.56 3.95-12.11 3.95V87.13c4.97 0 8.36.53 10.16 1.57 1.8 1.05 2.96 2.69 3.46 4.93zm20.61 137.32c5.43-1.19 9.99-3.29 13.69-6.28 3.69-3 6.28-7.15 7.76-12.46 1.49-5.3 2.37-15.83 2.37-31.58v-61.68c0-16.62-.65-27.76-1.66-33.42-1.02-5.67-3.55-10.82-7.6-15.44-4.06-4.62-9.98-7.94-17.76-9.96-7.79-2.02-20.49-3.04-42.58-3.04H287.5v175.65h55.28c12.74-.4 20.92-.99 24.54-1.79z"
                    />
                    <path
                      id="e"
                      d="M464.76 204.7c-.84 2.23-4.52 3.36-7.3 3.36-2.72 0-4.53-1.08-5.45-3.25-.92-2.16-1.37-7.09-1.37-14.81v-46.42c0-8 .4-12.99 1.21-14.98.8-1.97 2.56-2.97 5.28-2.97 2.78 0 6.51 1.13 7.47 3.4.95 2.27 1.43 7.12 1.43 14.55v45.01c-.29 9.25-.71 14.62-1.27 16.11zm-58.08 26.51h41.08c1.71-6.71 2.65-10.44 2.84-11.19 3.72 4.5 7.81 7.88 12.3 10.12 4.47 2.25 11.16 3.37 16.34 3.37 7.21 0 13.43-1.89 18.68-5.68 5.24-3.78 8.58-8.26 10-13.41 1.42-5.16 2.13-13 2.13-23.54V141.6c0-10.6-.24-17.52-.71-20.77s-1.87-6.56-4.2-9.95-5.72-6.02-10.16-7.9-9.68-2.82-15.72-2.82c-5.25 0-11.97 1.05-16.45 3.12-4.47 2.07-8.53 5.21-12.17 9.42V55.56h-43.96z"
                    />
                  </defs>
                  <use fill="#f6c700" xlinkHref="#a" />
                  <use fill="none" xlinkHref="#a" />
                  <use xlinkHref="#b" />
                  <use fill="none" xlinkHref="#b" />
                  <use xlinkHref="#c" />
                  <use fill="none" xlinkHref="#c" />
                  <use xlinkHref="#d" />
                  <use fill="none" xlinkHref="#d" />
                  <use xlinkHref="#e" />
                  <use fill="none" xlinkHref="#e" />
                </svg>
                {data?.ratings?.rating}
              </p>
            </div>
            <div className="movie__details-content__desc-raw">
              <p className="movie__details-content__desc-raw-title">Genre</p>
              <p className="movie__details-content__desc-raw-subtitle">
                {data?.genres?.map((genre, index) => (
                  <span key={index}>{genre},</span>
                ))}
              </p>
            </div>
            <div className="movie__details-content__desc-raw">
              <p className="movie__details-content__desc-raw-title">Actors</p>
              <p className="movie__details-content__desc-raw-subtitle">
                {DATA?.s}
              </p>
            </div>

            {data?.title?.runningTimeInMinutes ? (
              <div className="movie__details-content__desc-raw">
                <p className="movie__details-content__desc-raw-title">Time</p>
                <p className="movie__details-content__desc-raw-subtitle">
                  {data?.title?.runningTimeInMinutes}min
                </p>
              </div>
            ) : null}

            <div className="movie__details-content__desc-footer">
              <div className="movie__details-content__desc-footer__left">
                <a
                  target="blank"
                  href="https://www.google.com/"
                  className="movie__details-content__desc-footer__left-see"
                >
                  To watch for $1
                </a>
                <p className="movie__details-content__desc-footer__left-discount">
                  *DISCOUNT FOR NEW SUBSCRIBERS
                </p>
              </div>
              <div className="movie__details-content__desc-footer__right">
                <AddOrRemoveBtn DATA={DATA} />
              </div>
            </div>
          </div>

          <div className="movie__details-content__wrapper">
            <img
              src={data?.title?.image?.url || notFoundImage}
              alt={data?.title?.title}
              className="movie__details-content__wrapper-img"
            />
          </div>
        </div>

        {data?.plotOutline?.text ||
          (data?.plotSummary?.text && (
            <>
              <p> {data?.plotOutline?.text} </p>
              <p> {data?.plotSummary?.text} </p>
            </>
          ))}

        <div className="movie__details-preference">
          <h1 className="movie__details-preference__title">
            Preference of subscribing <br /> to <span>WORLD.TV</span>
          </h1>
          <ul className="movie__details-preference__items">
            <li className="movie__details-preference__items-item">
              <img src={devices} alt="devices" />
              <p>
                Up to 5 devices <br /> simultaneously
              </p>
            </li>
            <li className="movie__details-preference__items-item">
              <img src={noads} alt="noads" />
              <p>
                Movies without <br /> advertising
              </p>
            </li>
            <li className="movie__details-preference__items-item">
              <img src={hd} alt="hd" />
              <p>
                High image <br /> quality
              </p>
            </li>
            <li className="movie__details-preference__items-item">
              <img src={timeshift} alt="timeshift" />
              <p>
                Pause / rewind <br /> live broadcast
              </p>
            </li>
          </ul>
        </div>
      </div>
      <MovieDetailsSwiper images={movieImages} />
      <div className="movie__details-review container">
        {review?.reviewText ? (
          <>
            <p>{review?.reviewText}</p>
            <div className="movie__details-review__author">
              <p>{review?.author?.displayName}</p>
              <p>{review?.submissionDate}</p>
            </div>
          </>
        ) : null}
      </div>
      <MovieDetailsRelatedList relatedList={relatedMovies} />
      <Footer />
    </>
  );
};

export default MovieDetails;
