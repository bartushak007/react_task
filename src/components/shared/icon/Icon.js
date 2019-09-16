import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLevelDownAlt,
  faLevelUpAlt,
  faBolt
} from '@fortawesome/free-solid-svg-icons';

const icons = {
  down: faLevelDownAlt,
  up: faLevelUpAlt,
  bolt: faBolt
};

const Icon = ({ icon, fontSize, className }) => (
  <FontAwesomeIcon
    style={fontSize ? { fontSize } : {}}
    icon={icons[icon]}
    className={className}
  />
);

Icon.defaultProps = {
  icon: ''
};

Icon.propTypes = {
  icon: PropTypes.string
};

export default Icon;
