import React from 'react';
import Activities from '../../components/blocks/activity';
import './style/home.scss';

const Home = ({ data }) => {
  console.log(data);
  return (
    <div className="home container">
      {data.activities.map(activity => (
        <Activities key={activity.title} {...activity} />
      ))}
    </div>
  );
};

export default Home;
