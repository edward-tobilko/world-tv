import Logo from "../../components/header/Logo";
import { useMyContext } from "../../contexts/Context";
import "./auth.scss";

const Auth = () => {
  const { setAuth } = useMyContext();

  const handleOk = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAuth(true);

    localStorage.setItem("auth", "true");
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleOk}>
        <div className="auth__form-logo">
          <Logo />
        </div>

        <div className="auth__form-container">
          <h1 className="auth__form-container-title">Authorization</h1>
          <div className="auth__form-container-field">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              className="auth__form-container-field-input"
              autoComplete="off"
            />
          </div>
          <div className="auth__form-container-field">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="auth__form-container-field-input"
              autoComplete="off"
            />
          </div>
          <div className="auth__form-container-field">
            <span className="psw">
              Forgot <a href="https://www.google.com/">password?</a>
            </span>
          </div>
          <div className="auth__form-container-field">
            <label>
              <input type="checkbox" name="remember" /> <span>Remember me</span>
            </label>
            <button type="submit" className="auth__form-container-field-login">
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
