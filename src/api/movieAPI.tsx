import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

import {
  IMovies,
  IServerResponseMovies,
  IRootMovieDetails,
  IRootMovieImages,
  IImages,
} from "../models";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://imdb8.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "913ba78a9emsh9d52c38c867927dp1b0a39jsn94e9f3f6ecf0", // your api key
      );

      return headers;
    },
  }),
  endpoints: (build) => ({
    // Multi data
    getOverviewDetalils: build.query<IRootMovieDetails, string>({
      query: (overviewDetailsId: string) =>
        `/title/get-overview-details?currentCountry=US&tconst=${overviewDetailsId}`,
    }),
    getDetails: build.query<IServerResponseMovies<IMovies>, string>({
      query: (detailsId: string) => `/title/auto-complete?q=${detailsId}`,
    }),
    getImages: build.query<IImages[], string>({
      query: (imagesTitle: string) =>
        `/title/get-images?limit=25&tconst=${imagesTitle}`,
      transformResponse: (res: IRootMovieImages<IImages>) => res?.images,
    }),
    getReviews: build.query<any, any>({
      query: (reviewId: string) => `/title/get-reviews?tconst=${reviewId}`,
      transformResponse: (res: any) => ({
        review: res?.featuredUserReview?.review,
      }),
    }),

    // Search data
    getSearchMovies: build.query<IMovies[], string>({
      query: (search: string) => `auto-complete?q=${search}`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),

    // Movie data
    getMovies: build.query<IMovies[], []>({
      query: () => `auto-complete?q=avengers`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),
    getRelatedMovies: build.query<IMovies[], []>({
      query: () => `auto-complete?q=spider man`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),

    // Cartoons data
    getCartoons: build.query<IMovies[], []>({
      query: () => `/auto-complete?q=shrek`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),
    getRelatedCartoons: build.query<IMovies[], []>({
      query: () => `auto-complete?q=ica age`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),

    // Serials data
    getTvShowImages: build.query<IImages[], []>({
      query: () => `/title/get-images?limit=25&tconst=tt0944947`,
      transformResponse: (res: IRootMovieImages<IImages>) => res?.images,
    }),
    getTvshowFantasy: build.query<IMovies[], []>({
      query: () => `auto-complete?q=interview with the vampire`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),
    getTvshowRomance: build.query<IMovies[], []>({
      query: () => `auto-complete?q=tell me lies`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),
    getTvshowCrime: build.query<IMovies[], []>({
      query: () => `auto-complete?q=under the banner`,
      transformResponse: (response: IServerResponseMovies<IMovies>) =>
        response?.d,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSearchMoviesQuery,
  useGetDetailsQuery,
  useGetImagesQuery,
  useGetOverviewDetalilsQuery,
  useGetReviewsQuery,
  useGetRelatedMoviesQuery,
  useGetCartoonsQuery,
  useGetRelatedCartoonsQuery,
  useGetTvShowImagesQuery,
  useGetTvshowFantasyQuery,
  useGetTvshowRomanceQuery,
  useGetTvshowCrimeQuery,
} = movieAPI;
