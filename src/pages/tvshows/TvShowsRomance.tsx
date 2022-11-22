import { Link } from "react-router-dom";

import notFoundImage from "../../img/image-not-found.png";

const TvShowsRomance = ({ romanceData }: any) => {
  return (
    <div className="tvshows__content-list__item">
      {romanceData?.slice(0, 5)?.map((twshow: any) => (
        <div className="filmsPage__content-item" key={twshow?.id}>
          <Link
            to={`/movie/${twshow?.id}`}
            className="filmsPage__content-item__link"
          >
            <div className="filmsPage__content-item__link-img">
              <img src={twshow?.i?.imageUrl || notFoundImage} alt={twshow?.l} />
            </div>
            <h2 className="filmsPage__content-item__name">{twshow?.l}</h2>
          </Link>
          <div className="filmsPage__content-item__desc">
            <p> {twshow?.q} </p>
            <p> {twshow?.y} </p>
          </div>
          <p className="filmsPage__content-item__actors"> {twshow?.s} </p>
        </div>
      ))}
    </div>
  );
};

export default TvShowsRomance;
