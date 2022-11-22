import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

import { useMyContext } from "../../contexts/Context";
import Auth from "../../pages/auth/Auth";
import { headerNavigation } from "../../data/data";
import Search from "../search/Search";
import FavoriteIcon from "../icons/FavoriteIcon";

import Logo from "./Logo";
import { FiLogIn } from "react-icons/fi";
import { useAppSelector } from "../../redux/store";

const Header = () => {
  const { favorites } = useAppSelector((state) => state.movie);

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const { auth, setAuth } = useMyContext();

  const fixedHeader = () => {
    const header: any = document.querySelector(".header");

    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("fixed__header")
      : header.classList.remove("fixed__header");
  };

  const handleNok = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAuth(false);

    localStorage.setItem("auth", "false");
  };

  useEffect(() => {
    if (showBurgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("scroll", fixedHeader);

    return () => {
      window.removeEventListener("scroll", fixedHeader);
    };
  }, [showBurgerMenu]);

  return (
    <>
      {auth ? (
        <>
          <header className="header">
            <div className="header__left">
              <Logo />
              <ul className="header__navbar">
                <li className="header__navbar-list">
                  <NavLink to="/" className="header__navbar-list-link">
                    Home
                  </NavLink>
                </li>
                <li className="header__navbar-list">
                  <NavLink
                    to="/films-page"
                    className="header__navbar-list-link"
                  >
                    Films
                  </NavLink>
                </li>
                <li className="header__navbar-list">
                  <NavLink
                    to="/tvshows-page"
                    className="header__navbar-list-link"
                  >
                    TvShows
                  </NavLink>
                </li>
                <li className="header__navbar-list">
                  <NavLink
                    to="/cartoons-page"
                    className="header__navbar-list-link"
                  >
                    Cartoons
                  </NavLink>
                </li>
                <li className="header__navbar-list">
                  <NavLink
                    to="/favorites-page"
                    className="header__navbar-list-link"
                  >
                    Favorites
                  </NavLink>
                  <FavoriteIcon favorites={favorites} />
                </li>
              </ul>
            </div>

            <div className="header__right">
              <Search />
              <div className="header__right-login">
                <NavLink
                  to="/login"
                  className="header__right-login-link"
                  onClick={handleNok}
                >
                  <p>
                    <FiLogIn /> <span>Log out</span>
                  </p>
                </NavLink>
              </div>
            </div>
          </header>

          {!showBurgerMenu ? (
            <div className="burger" onClick={() => setShowBurgerMenu(true)}>
              <span></span>
            </div>
          ) : (
            <>
              <div className="burger__menu">
                <div
                  className="burger burger__close"
                  onClick={() => setShowBurgerMenu(false)}
                >
                  <span></span>
                </div>
                <ul className="header__navbar burger__menu-content__navbar">
                  {headerNavigation.map((link) => (
                    <li
                      className="header__navbar-list burger__menu-content__navbar-list"
                      key={link.id}
                    >
                      <NavLink
                        to={link.link}
                        className="header__navbar-list-link"
                        onClick={() => setShowBurgerMenu(false)}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Header;
