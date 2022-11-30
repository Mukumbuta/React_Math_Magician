import React, { Component } from 'react';
import Calc from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calc />
      </div>
    );
  }
}

export default App;
