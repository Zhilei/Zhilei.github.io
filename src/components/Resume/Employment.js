import React from 'react';
import PropTypes from 'prop-types';

import Work from './Employment/Work';

const Employment = ({ data }) => (
  <div className="employment">
    <div className="link-to" id="employment" />
    <div className="title">
      <h3>Employment</h3>
    </div>
    {data.map((work) => (
      <Work
        data={work}
        key={work.employer}
      />
    ))}
  </div>
);

Employment.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    employer: PropTypes.string,
    project: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Employment.defaultProps = {
  data: [],
};

export default Employment;
