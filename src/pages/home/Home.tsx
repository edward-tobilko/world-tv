import "./home.scss";

import { accordionData, brands } from "../../data/data";
import Accordion from "../../components/accordion/Accordion";
import Subscription from "../../components/subscription/Subscription";
import Footer from "../../components/footer/Footer";
import People from "../../components/people/People";
import Questions from "../../components/questions/Questions";

import videoBg from "../../video/john-wick.webm";
import present from "../../img/svg/present.svg";
import televisionWrapper from "../../img/microphone.jpg";
import filmsWrapper from "../../img/sherlock.jpg";
import cartoonsMac from "../../img/wrapper_mac.png";
import cartoonsBird from "../../img/bird.jpg";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__background">
          <video src={videoBg} autoPlay loop muted />
        </div>
        <div className="home__content">
          <h1 className="home__content-title">
            TV channels and movies wherever there is Internet!
          </h1>

          <ul className="home__content-menu">
            <li className="home__content-menu-list">Simple connection</li>
            <li className="home__content-menu-list">User-friendly interface</li>
            <li className="home__content-menu-list">
              The most interesting content
            </li>
          </ul>

          <h3 className="home__content-subtitle">
            Ready to watch? Turn it on on any device right now!
          </h3>

          <ul className="home__content-gadgets">
            <li className="home__content-gadgets-list">
              <i className="ri-tv-2-line"></i>
              <span>Tv</span>
            </li>
            <li className="home__content-gadgets-list">
              <i className="ri-computer-line"></i>
              <span>Computer</span>
            </li>
            <li className="home__content-gadgets-list">
              <i className="ri-smartphone-line"></i>
              <span>Phone</span>
            </li>
            <li className="home__content-gadgets-list">
              <i className="ri-tablet-line"></i>
              <span>Tablet</span>
            </li>
          </ul>

          <div className="home__content-footer">
            <button className="home__content-footer-btn">
              Watch 7 days for free!
            </button>
            <img
              src={present}
              alt="present"
              className="home__content-footer-img"
            />
          </div>
        </div>
      </div>

      <section className="television container">
        <h1 className="television-title">
          What is included in the WORLD.<span>TV</span> tariff?
        </h1>

        <div className="television__container">
          <div className="television__container-content">
            <h1 className="television__container-content-title">
              260+ channels <i className="ri-hd-line"></i>
              <i className="ri-4k-line"></i>
            </h1>

            <ul className="television__container-menu">
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  National and premium TV
                </h2>
                <p className="television__container-menu-subtitle">
                  National and premium TV
                </p>
              </li>
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  Manage your live stream
                </h2>
                <p className="television__container-menu-subtitle">
                  Rewind, pause and continue watching later
                </p>
              </li>
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  Transmissions in the record up to 7 days
                </h2>
                <p className="television__container-menu-subtitle">
                  No need to rush to be in time for the start of the program
                </p>
              </li>
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  Watch on any device
                </h2>
                <p className="television__container-menu-subtitle">
                  Connect up to 5 devices simultaneously. The app can be
                  installed on TV, smartphone, laptop, tablet or Xbox
                </p>
              </li>
            </ul>
          </div>

          <img
            className="television__container-img"
            alt="wrapper"
            src={televisionWrapper}
          />
        </div>
      </section>

      <section className="cartoons">
        <div className="cartoons__content">
          <div className="cartoons__content-img">
            <div className="light__effect-cartoons"></div>
            <img
              src={cartoonsMac}
              alt="mac"
              className="cartoons__content-img-mac"
            />
            <img
              src={cartoonsBird}
              alt="bird"
              className="cartoons__content-img-bird"
            />
          </div>
          <div className="cartoons__content-desc">
            <h1 className="television__container-content-title title__cartoon">
              Cartoons <i className="ri-hd-line"></i>
              <i className="ri-4k-line"></i>
            </h1>
            <p className="cartoons__content-desc-cartoons">
              Masterpieces of animation from Disney, Pixar, DreamWorks and
              others for children of all ages and for the whole family. Watch in
              English and without ads: "Batman", "Scooby-Doo!", "Teenage Mutant
              Ninja Turtles", "Ratatouille", "Shrek" and others.
            </p>

            <ul className="cartoons__content-desc-brands">
              {brands.map((brand) => (
                <li
                  className="cartoons__content-desc-brands__list"
                  key={brand.id}
                >
                  <img
                    src={brand.img}
                    alt={brand.name}
                    className="cartoons__content-desc-brands__list-img"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <People />
      <section className="films container">
        <div className="television__container-content">
          <h1 className="television__container-content-title">
            10 000+ movies <i className="ri-hd-line"></i>
            <i className="ri-4k-line"></i>
          </h1>

          <div className="films__container">
            <ul className="television__container-menu">
              <li className="television__container-menu-list">
                <p className="television__container-menu-subtitle">
                  Enjoy movie hits, Hollywood and Ukrainian exclusives at no
                  extra cost
                </p>
              </li>
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  Favorite movies are included in the tariff
                </h2>
                <p className="television__container-menu-subtitle">
                  The average rating of films in the tariff is 7.6 according to
                  IMDb
                </p>
              </li>
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  Transmissions in the record up to 7 days
                </h2>
                <p className="television__container-menu-subtitle">
                  No need to rush to be in time for the start of the program
                </p>
              </li>
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  Exclusive Ukrainian-language dubbing
                </h2>
                <p className="television__container-menu-subtitle">
                  Hollywood masterpieces with high-quality <br /> Ukrainian
                  sound from WORLD.TV
                </p>
              </li>
              <li className="television__container-menu-list">
                <h2 className="television__container-menu-title">
                  No advertising
                </h2>
                <p className="television__container-menu-subtitle">
                  We have no advertising. You no longer need <br /> to be
                  distracted from your favorite movie
                </p>
              </li>

              <ul className="cartoons__content-desc-brands">
                {brands.map((brand) => (
                  <li
                    className="cartoons__content-desc-brands__list"
                    key={brand.id}
                  >
                    <img
                      src={brand.img}
                      alt={brand.name}
                      className="cartoons__content-desc-brands__list-img"
                    />
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>

        <img src={filmsWrapper} alt="cherlock" className="films__img" />
        <div className="light__effect-films"></div>
      </section>

      <section className="important container">
        <h1 className="important__title">
          Once again about the most important
        </h1>
        <Accordion accordionData={accordionData} />
      </section>
      <Subscription />
      <Questions />
      <Footer />
    </>
  );
};

export default Home;
