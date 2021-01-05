import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export const Portal = ({ children }) => {
  return createPortal(children, document.body);
};
Portal.propTypes = {
  children: PropTypes.node.isRequired,
};
