import { useState } from 'react';
import styles from './Nav.module.css';
import { navigation, profile } from '../../profile';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <a className={styles.logo} href="#hero" aria-label={`${profile.displayName} — home`}>
        <span className="monogram" aria-hidden="true">BK<span>.</span></span>
        <span>{profile.displayName}</span>
      </a>
      <button className={styles.menuToggle} type="button" aria-expanded={menuOpen} aria-controls="main-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? 'Close' : 'Menu'}
      </button>
      <ul className={`${styles.menu} ${menuOpen ? styles.active : ''}`} id="main-menu">
        {navigation.map(({ href, label }) => (
          <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
