import React from 'react';
import Icon from '../../shared/icon';
import './style/graphs-collection.scss';

const GraphsCollection = ({ graphs }) => {
  return (
    <div className="graphs-collection">
      {graphs.map(({ total, totalTitle, percent: { value, icon } }) => {
        return (
          <div key={totalTitle}>
            <h3 className="graphs-collection__total">{total}</h3>
            <div className="space-between">
              <span>{totalTitle}</span>
              <span>
                {value}%{' '}
                <Icon
                  className="graphs-collection__icon"
                  icon={icon}
                  fontSize="10px"
                />
              </span>
            </div>
            <div className="graphs-collection__progress">
              <div
                className="graphs-collection__progress-bar"
                style={{ width: value + '%' }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GraphsCollection;
