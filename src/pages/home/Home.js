import React from 'react';
import PropTypes from 'prop-types';

import Activities from '../../components/blocks/activity';
import OrdersInGraphs from '../../components/sections/ordersInGraphs';
import './style/home.scss';

const Home = ({ data }) => {
  const renderActivities = activity => (
    <Activities key={activity.title} {...activity} />
  );

  return (
    <div className="home container">
      {data.activities.map(renderActivities)}
      <OrdersInGraphs ordersInGraphs={data.ordersInGraphs} />
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export default Home;
