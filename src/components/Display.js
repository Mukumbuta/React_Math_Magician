import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  render() {
    return (
      <div>
        <input type="text" className="display" placeholder="0" />
      </div>
    );
  }
}

export default Display;
