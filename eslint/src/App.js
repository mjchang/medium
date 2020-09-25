import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
import ReactDom from 'react-dom';
/* eslint-enable */

/* eslint-disable-line arrow-body-style */ const App = () => {
  return <h1>ESLint Demo</h1>;
};
App.propTypes = {
  /* eslint-disable-next-line react/no-unused-prop-types, react-redux/no-unused-prop-types */
  unused: PropTypes.string.isRequired,
};

export default App;
