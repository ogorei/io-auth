import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { domain as auth0Domain, clientId, callbackUri } from "./auth.config";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={auth0Domain}
      clientId={clientId}
      redirectUri={callbackUri}
      /* Uncomment the following lines for better support  in browers like Safari where third-party cookies are blocked.
         See https://auth0.com/docs/libraries/auth0-single-page-app-sdk#change-storage-options for risks. */
      // cacheLocation="localstorage",
      // useRefreshTokens={true}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);