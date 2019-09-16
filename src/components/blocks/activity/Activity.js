import React from 'react';
import Icon from '../../shared/icon';
import './style/activity.scss';

const Activity = ({
  variant,
  pointer,
  title,
  total,
  totalTitle,
  percent: { value, icon }
}) => {
  return (
    <div className="activity abroad">
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

export default Activity;
