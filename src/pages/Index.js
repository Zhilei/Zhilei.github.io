import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Zhilei Xu's personal website. Cosmologist, Astrophysicist, "
    + 'Instrument builder, Data analyst.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p> This is Zhilei Xu&apos;s personal website, who is interested in
            solving challenging problems
            with new technologies, particularly answering how our universe
            began and evolved into its current form.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/Zhilei/Zhilei.github.io">here</a>.</p>
    </article>
  </Main>
);

export default Index;
