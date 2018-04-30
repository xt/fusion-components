import { css } from 'emotion';
import React from 'react';
import { withTheme } from 'theming';
import PropTypes from 'prop-types';
import avatarStyle from './style';

const Avatar = ({ src, alt }) => (
  <img src={src} className={avatarStyle} alt={alt} />
);

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
/* Default Props */
Avatar.defaultProps = {
  src:
    'http://www.spaceandmotion.com/Images/albert-einstein-theory-general-relativity.jpg',
  alt: 'Avatar Image',
};

export default withTheme(Avatar);
