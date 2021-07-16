import React, { Component } from 'react';
import GlobalStyles from "./GlobalStyles";
import Route from './Router';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Route1 />
      </>
    );
  }
}

export default App;

