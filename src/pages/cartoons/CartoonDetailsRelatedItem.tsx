import { Link } from "react-router-dom";
import notFoundImage from "../../img/image-not-found.png";

const CartoonDetailsRelatedItem = ({ relatedItem }: any) => {
  return (
    <div className="filmsPage__content-item">
      <Link
        to={`/cartoon/${relatedItem?.id}`}
        className="filmsPage__content-item__link"
      >
        <div className="filmsPage__content-item__link-img">
          <img
            src={relatedItem?.i?.imageUrl || notFoundImage}
            alt={relatedItem?.l}
          />
        </div>
        <h2 className="filmsPage__content-item__name">{relatedItem?.l}</h2>
      </Link>
      <div className="filmsPage__content-item__desc">
        <p> {relatedItem?.q} </p>
        <p> {relatedItem?.y} </p>
      </div>
      <p className="filmsPage__content-item__actors">{relatedItem?.s}</p>
    </div>
  );
};

export default CartoonDetailsRelatedItem;
