import React from 'react';
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

export default Home;
