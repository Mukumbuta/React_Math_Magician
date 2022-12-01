import PropTypes from 'prop-types';
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Display extends Component {
  render() {
    const { value } = this.props;
    return (
      <div>
        <input type="text" className="display" placeholder={value} />
      </div>
    );
  }
}

Display.propTypes = { value: PropTypes.string.isRequired };
export default Display;
