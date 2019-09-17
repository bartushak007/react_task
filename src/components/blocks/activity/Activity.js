import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../shared/icon';
import './style/activity.scss';

const Activity = ({
  variant,
  className,
  pointer,
  title,
  total,
  totalTitle,
  percent: { value, icon }
}) => {
  return (
    <div className={`activity  abroad ${className}`}>
      <div className="activity__header space-between wrap-head">
        <h3 className="title">{title}</h3>
        <span className={`activity__pointer activity__pointer--${variant}`}>
          {' '}
          {pointer}
        </span>
      </div>
      <div className="wrap-content">
        <h3 className="activity__total">{total}</h3>
        <div className="space-between">
          <span>{totalTitle}</span>
          <span className={`activity__percent activity__percent--${variant}`}>
            {value}% <Icon icon={icon} fontSize="10px" />
          </span>
        </div>
      </div>
    </div>
  );
};

Activity.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  pointer: PropTypes.string,
  title: PropTypes.string,
  total: PropTypes.string,
  totalTitle: PropTypes.string,
  percent: PropTypes.shape({
    value: PropTypes.number,
    icon: PropTypes.string
  }).isRequired
};

export default Activity;
