import React from 'react';
import PropTypes from 'prop-types';

import Activities from '../../components/blocks/activity';
import OrdersInGraphs from '../../components/sections/ordersInGraphs';
import PartialContent from '../../components/shared/partialContent';
import './style/home.scss';

const Home = ({ data }) => {
  const renderActivities = activity => (
    <Activities key={activity.title} {...activity} />
  );

  return (
    <div className="home container">
      {data.activities.map(renderActivities)}
      <OrdersInGraphs ordersInGraphs={data.ordersInGraphs} />
      <div className="home__content-collection">
        <div className="home__messages-container">
          <PartialContent>messages</PartialContent>
        </div>
        <div className="home__lists-container">2</div>
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export default Home;
