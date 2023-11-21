import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/Zhilei_photo.jpg`} alt="" />
      </Link>
      <header>
        <h2>Zhilei Xu</h2>
        <p><a href="mailto:astro.zlxu@gmail.com">astro.zlxu@gmail.com</a></p>
        <p>Name Pronunciation
          <audio controls>
            <source src={`${PUBLIC_URL}/Zhilei_Xu_pron.mp4`} />
            <track src={`${PUBLIC_URL}/Zhilei_Xu_pron.vtt`} kind="captions" srcLang="en" label="english_captions" />
          </audio>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, I am Zhilei Xu,
        I am an astrophysicist interested in studying the beginning
        and the evolution of the Universe,
        especially through observing the 21-cm signal and
        cosmic microwave background (CMB).
        In addition, I am also interested in the formation and evolution
        of galaxies and galaxy clusters.
        I am a member of the HERA collaboration in 21-cm and CLASS, SO,
        ACT, CMB-S4 collaborations in CMB.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
