import React, { Component } from "react";
import "./App.css";

// GRAPHQL REQ

import gql from "graphql-tag";
import { graphql } from "react-apollo";

class App extends Component {
  renderRow = (category, index) => {
    return <li key={index}>{category.name}</li>;
  };

  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }
    return (
      <div className="App">
        {this.props.data.categories.map((category, index) =>
          this.renderRow(category, index)
        )}
      </div>
    );
  }
}

export default graphql(gql`
  query allCategories {
    categories {
      id
      name
    }
  }
`)(App);
