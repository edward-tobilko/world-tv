import { ReactNode } from "react";

// Home types
export interface IAccordionData {
  number: number;
  text: string;
  content: ReactNode;
}

// Details types
export interface Ii {
  height: number;
  imageUrl: string;
  width: number;
}
export interface Ii2 {
  height: number;
  imageUrl: string;
  width: number;
}
export interface IV {
  i: Ii2;
  id: string;
  l: string;
  s: string;
}
export interface IMovies {
  i: Ii;
  id: string;
  l: string;
  q: string;
  qid: string;
  rank: number;
  s: string;
  v: IV[];
  vt: number;
  y: number;
  yr: string;
}
export interface IServerResponseMovies<G> {
  d: G[]; // G - generic
  q: string;
  v: number;
}

// Overview details types
export interface IImage {
  height: number;
  id: string;
  url: string;
  width: number;
}
export interface ITitle {
  id: string;
  image: IImage;
  runningTimeInMinutes: number;
  nextEpisode: string;
  numberOfEpisodes: number;
  seriesEndYear: number;
  seriesStartYear: number;
  title: string;
  titleType: string;
  year: number;
}
export interface IUS {
  certificate: string;
  country: string;
}
export interface ICertificates {
  US: IUS[];
}
export interface IOtherRank {
  id: string;
  label: string;
  rank: number;
  rankType: string;
}
export interface IRatings {
  canRate: boolean;
  rating: number;
  ratingCount: number;
  otherRanks: IOtherRank[];
}
export interface IPlotOutline {
  id: string;
  text: string;
}
export interface IPlotSummary {
  author: string;
  id: string;
  text: string;
}
export interface IRootMovieDetails {
  id: string;
  title: ITitle;
  certificates: ICertificates;
  ratings: IRatings;
  genres: string[];
  releaseDate: string;
  plotOutline: IPlotOutline;
  plotSummary: IPlotSummary;
}

// Images types
export interface IImage2 {
  height: number;
  id: string;
  url: string;
  width: number;
}
export interface IRelatedName {
  akas: string[];
  disambiguation: string;
  id: string;
  image: IImage2;
  legacyNameText: string;
  name: string;
}
export interface IImage3 {
  height: number;
  id: string;
  url: string;
  width: number;
}
export interface IRelatedTitle {
  id: string;
  image: IImage3;
  title: string;
  titleType: string;
  year: number;
  episode?: number;
  season?: number;
}
export interface IImages {
  caption: string;
  createdOn: Date;
  height: number;
  id: string;
  url: string;
  width: number;
  relatedNames: IRelatedName[];
  relatedTitles: IRelatedTitle[];
  source: string;
  type: string;
}
export interface IRootMovieImages<I> {
  images: I[];
  totalImageCount: number;
}

// Movie swiper
export interface IMoviesSwiper {
  id: number;
  img: string;
  title: string;
}

// Movie genres
export interface IMovieGenres {
  title: string;
  value: string;
}

// Brands
export interface IBrands {
  id: number;
  name?: string;
  img: any;
}

// Header navigation
export interface IHeaderNavigation {
  id: number;
  link: string;
  name: string;
}

// Context
export interface IContext {
  auth: boolean;
  setAuth: (auth: boolean) => void;
}

// Footer
export interface ISectionsData {
  id: number;
  name: string;
}
export interface IAboutCompanyData {
  id: number;
  name: string;
}
export interface IAppsData {
  id: number;
  icon: any;
  title: string;
  link: string;
  name: string;
}
export interface ISocialLinksData {
  id: number;
  icon: any;
  link: string;
}
