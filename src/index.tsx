import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

// Store
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
