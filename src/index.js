import "core-js";
import "./bootstrap";
import React, { Suspense } from "react";
import ReactDom from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import config from "./connections";
import { persist, store } from "./store";
import { history } from "./services";
import "./assets/styles/index.scss";
import App from "./App";
import { Auth } from "./module/auth/containers";
import "antd/dist/antd.min.css";
import Loading from "./components/Loading";

const queryClient = new QueryClient();

ReactDom.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider {...{ store }}>
        <PersistGate loading={null} persistor={persist}>
          <QueryClientProvider client={queryClient}>
            <Auth>
              <ConnectedRouter {...{ history }}>
                {config.app.env === "development" && (
                  <ReactQueryDevtools position="bottom-right" />
                )}
                <App />
              </ConnectedRouter>
            </Auth>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
