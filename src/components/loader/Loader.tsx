import "./loader.scss";
import loader from "../../img/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__content">
        <img src={loader} className="loader__content-icon" alt="loader" />
        <h2 className="loader__content-title">
          {"Loading movies..." || "Loading..."}
        </h2>
      </div>
    </div>
  );
};

export default Loader;
