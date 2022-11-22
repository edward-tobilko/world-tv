import "./cartoons.scss";
import { Link } from "react-router-dom";

import Error from "../../components/error/Error";
import Loader from "../../components/loader/Loader";
import CartoonsPageCinemaStudio from "./CartoonsPageCinemaStudio";
import Footer from "../../components/footer/Footer";
import { useGetCartoonsQuery } from "../../api/movieAPI";

import notFoundImage from "../../img/image-not-found.png";
import CartoonPageText from "../../components/texts/CartoonPageText";

const CartoonsPage = () => {
  const { data, isFetching, isError } = useGetCartoonsQuery([]);

  if (isFetching) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      <div className="cartoonsPage">
        <h1 className="cartoonsPage-title">Cartoons</h1>
        <div className="cartoonsPage__content container">
          {data?.map((cartoon) => (
            <div className="cartoonsPage__content-item" key={cartoon?.id}>
              <Link
                to={`/cartoon/${cartoon?.id}`}
                className="cartoonsPage__content-item__link"
              >
                <div className="cartoonsPage__content-item__link-img">
                  <img
                    src={cartoon?.i?.imageUrl || notFoundImage}
                    alt={cartoon?.l}
                  />
                </div>
                <h2 className="cartoonsPage__content-item__name">
                  {cartoon?.l}
                </h2>
              </Link>
              <div className="cartoonsPage__content-item__desc">
                <p> {cartoon?.qid} </p>
                <p> {cartoon?.y} </p>
              </div>
            </div>
          ))}
        </div>
        <CartoonsPageCinemaStudio />
        <CartoonPageText />
        <Footer />
      </div>
    </>
  );
};

export default CartoonsPage;
