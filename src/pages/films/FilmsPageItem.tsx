import { Link } from "react-router-dom";

import notFoundImage from "../../img/image-not-found.png";

const FilmsPageItem = ({ item }: any) => {
  return (
    <>
      <div className="filmsPage__content-item">
        <Link
          to={`/movie/${item?.id}`}
          className="filmsPage__content-item__link"
        >
          <div className="filmsPage__content-item__link-img">
            <img src={item?.i?.imageUrl || notFoundImage} alt={item?.l} />
          </div>
          <h2 className="filmsPage__content-item__name">{item?.l}</h2>
        </Link>
        <div className="filmsPage__content-item__desc">
          <p> {item?.q} </p>
          <p> {item?.y} </p>
        </div>
        <p className="filmsPage__content-item__actors"> {item?.s} </p>
      </div>
    </>
  );
};

export default FilmsPageItem;
