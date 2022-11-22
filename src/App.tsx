import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./contexts/Context";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import FilmsPage from "./pages/films/FilmsPage";
import TvShows from "./pages/tvshows/TvShows";
import CartoonsPage from "./pages/cartoons/CartoonsPage";
import Auth from "./pages/auth/Auth";
import MovieDetails from "./pages/films/MovieDetails";
import CartoonDetails from "./pages/cartoons/CartoonDetails";
import Favorites from "./pages/favorites/Favorites";

const App = () => {
  const [auth, setAuth] = useState(false);

  // Scroll Up
  function scrollUp() {
    const scrollUp: any = document.getElementById("scroll-up");

    if (window.scrollY >= 350) {
      scrollUp.classList.add("show__scroll");
    } else {
      scrollUp.classList.remove("show__scroll");
    }
  }
  window.addEventListener("scroll", scrollUp);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);

  return (
    <>
      <Context.Provider value={{ auth, setAuth }}>
        <Header />
        {auth ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films-page" element={<FilmsPage />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tvshows-page" element={<TvShows />} />
            <Route path="/cartoons-page" element={<CartoonsPage />} />
            <Route path="/favorites-page" element={<Favorites />} />
            <Route path="/cartoon/:cartoonId" element={<CartoonDetails />} />
            <Route path="/auth" element={<Auth />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/auth" element={<Auth />} />
          </Routes>
        )}
      </Context.Provider>

      <a href="#" id="scroll-up" className="scroll__up">
        <i className="ri-arrow-up-s-line"></i>
      </a>
    </>
  );
};

export default App;
