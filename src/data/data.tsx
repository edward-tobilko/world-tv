import blackAdam from "../img/films/black-adam.jpg";
import ambulance from "../img/films/ambulance.jpg";
import jamesBond from "../img/films/James-Bond.jpg";
import justiceLeagueFeature from "../img/films/justice-league-feature.jpg";
import lucy from "../img/films/Lucy.jpg";
import texasSaw from "../img/films/texas-saw.jpg";
import theTomorrow from "../img/films/the-tomorrow.jpg";
import theWitcher from "../img/films/The-Witcher.jpg";
import sonyc from "../img/films/Sonyc.jpg";
import joker from "../img/films/joker.jpg";
import disneyIcon from "../img/disney.webp";
import mgmIcon from "../img/MGM.webp";
import dreamworksIcon from "../img/dreamworks.webp";
import paramountIcon from "../img/paramount.webp";
import sonyIcon from "../img/sony.webp";
import warnerIcon from "../img/warner.webp";

import { SiHuawei } from "react-icons/si";
import { IoTvSharp } from "react-icons/io5";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import {
  IHeaderNavigation,
  IMovieGenres,
  IMoviesSwiper,
  IBrands,
  ISectionsData,
  IAppsData,
  ISocialLinksData,
  IAboutCompanyData,
  IAccordionData,
} from "../models";

// Home
export const accordionData: IAccordionData[] = [
  {
    number: 1,
    text: "What are the benefits of subscribing to WORLD.TV?",
    content: (
      <div>
        Subscription to WORLD.TV is an access for 30 days to 260+ TV channels
        (depending on the tariff), including national, premium, regional, film,
        news, sports, educational and others.High image quality: watch your
        favorite programs and movies, including HD and 4K. On WORLD.TV you can
        control TV air: pause, rewind and record TV programs up to 7 days.On
        WORLD.TV you can pause TV at any time and continue watching later. There
        is also a rewind function. The recording is stored for up to 7 days.In
        addition to TV, subscribers get access to a wide library of movies that
        can be watched without additional fees: 10 000+ films, premieres, as
        well as Ukrainian and Hollywood exclusives.
      </div>
    ),
  },
  {
    number: 2,
    text: "How to connect WORLD.TV?",
    content: (
      <div>
        It's very easy! You need to register on the service and choose the
        desired tariff.You can do this on the website or in the WORLD.TV
        application on any device.Registration takes place using a phone number,
        Google, Facebook or Apple ID. It will take only a few minutes.
      </div>
    ),
  },
  {
    number: 3,
    text: "How is the payment and extension of the tariff made?",
    content: (
      <div>
        Choose the desired tariff and pay with a bank card. Thus, the card will
        be connected to your personal account. It is completely safe and
        reliable.Then the tariff will be automatically renewed every month, so
        you do not have to spend extra time on replenishment.Also, you can pay
        for a subscription to WORLD.TV in a bank terminal, using mobile banking
        or mobile account.
      </div>
    ),
  },
  {
    number: 4,
    text: "How does the free trial period work?",
    content: (
      <div>
        By connecting the trial tariff WORLD.TV, the subscriber gets free access
        to the service for 7 days. So you can fully test it and enjoy all the
        benefits.Then we recommend to extend the tariff and use WORLD.TV for
        another 14 days for only 1$.Then the tariff will be automatically
        extended until it is disconnected. You can do this in your personal
        account on the WORLD.TV website at any time.
      </div>
    ),
  },
  {
    number: 5,
    text: "What does live TV management mean?",
    content: (
      <div>
        On the Internet TV WORLD.TV you can control the TV air: pause, rewind to
        the desired moment and watch TV programs in the record up to 7 days.You
        no longer need to hurry and worry that you are late for the beginning of
        the program. With WORLD.TV you can enjoy your favorite shows when it is
        convenient for you!
      </div>
    ),
  },
  {
    number: 6,
    text: "What does 5 devices for one price mean?",
    content: (
      <div>
        The subscriber can activate his subscription on 5 devices at once,
        including TV, smartphone, computer, tablet and even Xbox.WORLD.TV works
        even in the most remote corners of Ukraine - the main thing is to have
        the Internet. But if it is not available, you can download the movie in
        the application on your smartphone or tablet and watch it offline.
      </div>
    ),
  },
];

// Movie swiper
export const filmsData: IMoviesSwiper[] = [
  { id: 1, img: blackAdam, title: "blackAdam" },
  { id: 2, img: ambulance, title: "ambulance" },
  { id: 3, img: jamesBond, title: "jamesBond" },
  { id: 4, img: justiceLeagueFeature, title: "justiceLeagueFeature" },
  { id: 5, img: lucy, title: "lucy" },
  { id: 6, img: joker, title: "emmaStone" },
  { id: 7, img: texasSaw, title: "texasSaw" },
  { id: 8, img: theTomorrow, title: "theTomorrow" },
  { id: 9, img: theWitcher, title: "theWitcher" },
  { id: 10, img: sonyc, title: "sonyc" },
];

// Movie genres
export const movieGenresData: IMovieGenres[] = [
  { title: "Action", value: "Action" },
  // { title: "Adult", value: "Adult" },
  { title: "Adventure", value: "Adventure" },
  { title: "Animation", value: "Animation" },
  { title: "Biography", value: "Biography" },
  { title: "Comedy", value: "Comedy" },
  { title: "Crime", value: "Crime" },
  { title: "Documentary", value: "Documentary" },
  { title: "Drama", value: "Drama" },
  { title: "Family", value: "Family" },
  { title: "Fantasy", value: "Fantasy" },
  { title: "Film-Noir", value: "Film-Noir" },
  // { title: "Game-Show", value: "Game-Show" },
  { title: "History", value: "History" },
  { title: "Horror", value: "Horror" },
  { title: "Music", value: "Music" },
  { title: "Musical", value: "Musical" },
  { title: "Mystery", value: "Mystery" },
  // { title: "News", value: "News" },
  // { title: "Reality-TV", value: "Reality-TV" },
  { title: "Romance", value: "Romance" },
  { title: "Sci-Fi", value: "Sci-Fi" },
  // { title: "Short", value: "Short" },
  { title: "Sport", value: "Sport" },
  // { title: "Talk-Show", value: "Talk-Show" },
  { title: "Thriller", value: "Thriller" },
  { title: "War", value: "War" },
  { title: "Western", value: "Western" },
];

// Brands
export const brands: IBrands[] = [
  { id: 1, name: "disney", img: disneyIcon },
  { id: 2, name: "mgm", img: mgmIcon },
  { id: 3, name: "dreamworks", img: dreamworksIcon },
  { id: 4, name: "paramount", img: paramountIcon },
  { id: 5, name: "sony", img: sonyIcon },
  { id: 6, name: "warner", img: warnerIcon },
];

// Header navigation
export const headerNavigation: IHeaderNavigation[] = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/films-page", name: "Films" },
  { id: 3, link: "/tvshows-page", name: "TvShows" },
  { id: 4, link: "/cartoons-page", name: "Cartoons" },
  { id: 5, link: "/favorites-page", name: "Favorites" },
];

// Footer
export const sectionsData: ISectionsData[] = [
  { id: 1, name: "Tv" },
  { id: 2, name: "Films" },
  { id: 3, name: "Cartoons" },
  { id: 4, name: "Serials" },
  { id: 5, name: "Training" },
  { id: 6, name: "News" },
  { id: 7, name: "Tariffs" },
  { id: 8, name: "Promo code" },
];

export const aboutCompanyData: IAboutCompanyData[] = [
  { id: 1, name: "About us" },
  { id: 2, name: "Hollywood in Ukrainian" },
  { id: 3, name: "IT support" },
  { id: 4, name: "Film Fund" },
  { id: 5, name: "For the press" },
  { id: 6, name: "Partners" },
  { id: 7, name: "Contacts" },
  { id: 8, name: "Privacy policy" },
  { id: 9, name: "Contract" },
];

export const apps: IAppsData[] = [
  {
    id: 1,
    icon: <FaGooglePlay className="footer__footer-apps__menu-icon" />,
    title: "Available in",
    name: "Google Play",
    link: "https://googleplay.com",
  },
  {
    id: 2,
    icon: <FaApple className="footer__footer-apps__menu-icon" />,
    title: "Upload to",
    name: "App Store",
    link: "https://appstore.com",
  },
  {
    id: 3,
    icon: <SiHuawei className="footer__footer-apps__menu-icon" />,
    title: "Available for",
    name: "Smart Tv",
    link: "http://smarttv.com/",
  },
  {
    id: 4,
    icon: <IoTvSharp className="footer__footer-apps__menu-icon" />,
    title: "Upload to",
    name: "App Gallery",
    link: "https://appgallery.huawei.com/Featured",
  },
];

export const socialLinks: ISocialLinksData[] = [
  { id: 1, icon: <BsFacebook />, link: "https:facebook.com" },
  { id: 2, icon: <BsTwitter />, link: "https:twitter.com" },
  { id: 3, icon: <BsInstagram />, link: "https:instagram.com" },
  { id: 4, icon: <BsYoutube />, link: "https:youtube.com" },
  { id: 5, icon: <BsPinterest />, link: "https:pinterest.com" },
];
