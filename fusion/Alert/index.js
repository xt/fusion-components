import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';
import PropTypes from 'prop-types';
import alertStyle from './style';

const Alert = ({ children }) => <div className={alertStyle}> {children} </div>;

Alert.propTypes = {
  /**
   * Type of Alert
   */
  // type: PropTypes.oneOf(['warning', 'info', 'error', 'success']),
  children: PropTypes.element,
};
Alert.defaultProps = {
  // type: 'error',
  children: <span>&apos;Success is not this!&apos;</span>,
};
export default withTheme(Alert);
