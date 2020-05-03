import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  createNetworkInterface,
  AppoloClient,
  ApolloProvider
} from "react-apollo";

const networkInterface = createNetworkInterface({
  uri: "http://localhost:3000/graphql"
});

const client = new AppoloClient({
  networkInterface: networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
