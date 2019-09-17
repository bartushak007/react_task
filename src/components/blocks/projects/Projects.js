import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../shared/icon';
import './style/projects.scss';

const Projects = ({ projectsList }) => {
  const renderProjects = (project, i) => <Project key={i} {...project} />;

  return (
    <div className=" wrap-content">
      <div className="projects__item">
        <div className="projects__cell projects__cell--wider">
          <span className="title"> Status</span>
        </div>
        <div className="projects__cell">
          <span className="title"> Date</span>
        </div>
        <div className="projects__cell">
          <span className="title"> User</span>
        </div>
        <div className="projects__cell projects__cell--narrow">
          <span className="title"> Value</span>
        </div>
      </div>
      {projectsList.map(renderProjects)}
    </div>
  );
};

const Project = React.memo(({ status, date, user, value }) => {
  return (
    <div className="projects__item">
      <div className="projects__cell projects__cell--wider">
        <span
          className={`projects__cell-status projects__cell-status--${status.toLowerCase()}`}
        >
          {status}
        </span>
      </div>
      <div className="projects__cell">
        <Icon icon="clock" /> {date}
      </div>
      <div className="projects__cell">{user}</div>
      <div className="projects__cell projects__cell--narrow projects__cell-value">
        {value}% <Icon icon="up" />
      </div>
    </div>
  );
});

Projects.propTypes = {
  projectsList: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      date: PropTypes.string,
      user: PropTypes.string,
      value: PropTypes.number
    })
  )
};

export default Projects;
