import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store/index";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

const onRedirectCallback = (appState) => {
  history.push(appState?.returnTo || `{window.location.origin/${home}}`);
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Auth0Provider
        domain='dev-kst5j83dskuu3ss0.us.auth0.com'
        clientId='kXK3jrRrhUhDyBH9cHywnfaGAvWOSZXl'
        authorizationParams={{
          redirect_uri: window.location.origin,
          onRedirectCallback: { onRedirectCallback },
        }}
      >
        <App />
      </Auth0Provider>
    </Router>
  </Provider>
);
