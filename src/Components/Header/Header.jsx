import styles from './Header.module.css';
import Portrait from './Portrait';
import { profile } from '../../profile';

function Header() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className="eyebrow">{profile.location}</p>
        <h2>Hello, I’m {profile.displayName}</h2>
        <h1 id="hero-title">Software Developer <span>& Creative Video Editor</span></h1>
        <p className={styles.bio}>{profile.bio}</p>
        <div className={styles.home_btns}>
          <a className="button" href="#contact">Let’s talk</a>
          <div className={styles.social} aria-label="Social profiles">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <Portrait />
    </section>
  );
}

export default Header;
