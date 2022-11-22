import "./people.scss";
import BigLogo from "../../components/header/BigLogo";

import people_1 from "../../img/people_1.jpg";
import people_2 from "../../img/people_2.jpg";
import people_3 from "../../img/people_3.jpg";

const People = () => {
  return (
    <section className="people">
      <div className="people__content container">
        <div className="people__content-logo">
          <BigLogo />
        </div>
        <p className="people__content-title">NATIONAL ONLINE CINEMA</p>
        <ul className="people__content-menu">
          <li className="people__content-menu-list">7</li>
          <li className="people__content-menu-list">5</li>
          <li className="people__content-menu-list">2</li>
          <li className="people__content-menu-list">8</li>
          <li className="people__content-menu-list">1</li>
          <li className="people__content-menu-list">9</li>
          <li className="people__content-menu-list">6</li>
        </ul>
        <h1 className="people__content-subtitle">
          People have already tried WORLD.<span>TV</span>
        </h1>
      </div>

      <div className="people__images">
        <img src={people_2} alt="people_2" className="people__images-img" />
        <img src={people_1} alt="people_1" className="people__images-img" />
        <img src={people_3} alt="people_3" className="people__images-img" />
      </div>
    </section>
  );
};

export default People;
