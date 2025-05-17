import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { ApolloProvider } from "@apollo/client";

import "./index.css";
import App from "./App.tsx";
import { store } from "./store/index.ts";

import { apolloClient } from "./shared/graphql/graphql-client.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </Provider>
  </StrictMode>
);
