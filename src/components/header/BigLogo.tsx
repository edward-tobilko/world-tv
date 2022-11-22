import logo from "../../img/logo.png";

const BigLogo = () => {
  return (
    <div className="header-bigLogo">
      <img className="header-bigLogo-img" alt="logo" src={logo} />
      <h5 className="header-bigLogo-title">World</h5>
      <p className="header-bigLogo-subtitle">TV</p>
    </div>
  );
};

export default BigLogo;
