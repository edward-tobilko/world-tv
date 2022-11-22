import logo from "../../img/logo.png";

const Logo = () => {
  return (
    <div className="header-logo">
      <img className="header-logo-img" alt="logo" src={logo} />
      <h5 className="header-logo-title">World</h5>
      <p className="header-logo-subtitle">TV</p>
    </div>
  );
};

export default Logo;
