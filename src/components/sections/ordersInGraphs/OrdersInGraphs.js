import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/image';
import GraphsCollection from '../../blocks/graphsCollection';

import './style/orders-in-graphs.scss';

const OrdersInGraphs = ({
  ordersInGraphs: {
    title,
    switchGraphs,
    graph: { src, alt }
  }
}) => {
  const [currentGraph, setCurrentGraph] = useState(0);

  const renderButtons = ({ name }, i) => {
    return (
      <button
        key={name}
        onClick={() => setCurrentGraph(i)}
        className={`orders-in-graphs__btn ${currentGraph === i &&
          'orders-in-graphs__btn--active'} `}
      >
        {' '}
        {name}
      </button>
    );
  };

  const current = switchGraphs[currentGraph];

  return (
    <div className="orders-in-graphs abroad">
      <div className="a space-between wrap-head">
        <h3 className="title">{title}</h3>
        <div>{switchGraphs.map(renderButtons)}</div>
      </div>
      <div className="orders-in-graphs__graph-container wrap-content">
        <Image {...{ alt, src, className: 'orders-in-graphs__img' }} />
        <div className="orders-in-graphs__collection">
          <GraphsCollection key={current.name} graphs={current.graphs} />
        </div>
      </div>
    </div>
  );
};

OrdersInGraphs.propTypes = {
  ordersInGraphs: PropTypes.shape({
    title: PropTypes.string,
    switchGraphs: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string, graphs: PropTypes.array })
    ),
    graph: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string })
      .isRequired
  }).isRequired
};

export default OrdersInGraphs;
