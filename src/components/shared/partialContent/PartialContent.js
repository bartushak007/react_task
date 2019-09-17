import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../icon';
import useToggle from '../../../hooks/useToggle';
import './style/partial-content.scss';

const PartialContent = ({ children, title }) => {
  const { toggle, turnToggle } = useToggle();
  const ToggleBtn = ({ children }) => (
    <button className="partial-content__btn" onClick={turnToggle}>
      {children}
    </button>
  );
  return (
    <div className="abroad partial-content">
      <div className="space-between wrap-head">
        <h3 className="title">{'title'}</h3>{' '}
        <div>
          <ToggleBtn>
            <Icon icon={toggle ? 'angleUp' : 'angleDown'} />
          </ToggleBtn>
          <button className="partial-content__btn">
            <Icon icon="wrench" />
          </button>
          <button className="partial-content__btn">
            <Icon icon="times" />
          </button>
        </div>
      </div>
      <div className="wrap-content">
        {toggle ? (
          children
        ) : (
          <ToggleBtn>
            <span className="partial-content__dots">...</span>
          </ToggleBtn>
        )}
      </div>
    </div>
  );
};

PartialContent.propTypes = {
  title: PropTypes.string
};

export default PartialContent;
