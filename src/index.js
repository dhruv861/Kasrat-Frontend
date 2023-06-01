import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HMSRoomProvider } from "@100mslive/react-sdk";
import { Provider } from "react-redux";
import { store } from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GoogleOAuthProvider clientId="988598429476-8ebq27tmstmu43ksdv36uirrq1or4j9r.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <HMSRoomProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HMSRoomProvider>
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
