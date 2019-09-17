import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLevelDownAlt,
  faLevelUpAlt,
  faBolt,
  faAngleUp,
  faAngleDown,
  faWrench,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import { faEnvelope, faClock } from '@fortawesome/free-regular-svg-icons';
const icons = {
  down: faLevelDownAlt,
  up: faLevelUpAlt,
  bolt: faBolt,
  angleUp: faAngleUp,
  angleDown: faAngleDown,
  wrench: faWrench,
  times: faTimes,
  envelope: faEnvelope,
  clock: faClock
};

const Icon = ({ icon, fontSize, ...props }) => {
  return (
    <FontAwesomeIcon
      {...props}
      style={fontSize ? { fontSize } : {}}
      icon={icons[icon]}
    />
  );
};

Icon.defaultProps = {
  icon: ''
};

Icon.propTypes = {
  icon: PropTypes.string
};

export default Icon;
