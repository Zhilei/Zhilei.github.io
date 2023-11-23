import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
// import ContactIcons from '../components/Contact/ContactIcons';

const Publications = () => (
  <Main
    title="Publications"
    description="Publications from Zhilei Xu"
  >
    <article className="post" id="publications">
      <header>
        <div className="title">
          <h2><Link to="/publications">Publications</Link></h2>
        </div>
      </header>
      <div className="pub">
        <p> 120 Papers | &gt; 4000 citations | 27 H-index </p>
        <p> Full publication list: <br />
          <a href="http://ui.adsabs.harvard.edu/public-libraries/P3gVPM0sQIOLjP5dMrelwA"> ADS Library </a> <br />
          <a href="https://scholar.google.com/citations?user=r4CiTQcAAAAJ&hl=en"> Google Scholar </a> <br />
        </p>
      </div>
    </article>
  </Main>
);

export default Publications;
