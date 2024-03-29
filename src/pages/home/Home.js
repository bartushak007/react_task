import React from 'react';
import PropTypes from 'prop-types';

import Activities from '../../components/blocks/activity';
import OrdersInGraphs from '../../components/sections/ordersInGraphs';
import PartialContent from '../../components/shared/partialContent';
import Messages from '../../components/blocks/messages';
import Projects from '../../components/blocks/projects';
import Todo from '../../components/blocks/todo';
import TransactionsContainer from '../../containers/TransactionsContainer';
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
          <PartialContent title={data.messages.title}>
            <Messages {...data.messages} />
          </PartialContent>
        </div>
        <div className="home__lists-container">
          {data.projects && (
            <PartialContent title={data.projects.title} className="projects">
              <Projects {...data.projects} />
            </PartialContent>
          )}
          {data.todo && (
            <PartialContent title={data.todo.title} className="todo">
              <Todo {...data.todo} />
            </PartialContent>
          )}
          {data.transactions && (
            <PartialContent
              title={data.transactions.title}
              className="transactions"
            >
              <TransactionsContainer />
            </PartialContent>
          )}
        </div>
        {/* <TransactionsMapContainer /> */}
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export default Home;
