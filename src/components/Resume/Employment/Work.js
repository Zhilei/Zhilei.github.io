import React from 'react';
import PropTypes from 'prop-types';

const Work = ({ data }) => (
  <article className="work-container">
    <header>
      <h4 className="employer">{data.employer}</h4>
      <p className="project"><a href={data.link}>{data.project}</a>, {data.year}</p>
    </header>
  </article>
);

Work.propTypes = {
  data: PropTypes.shape({
    employer: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Work;
