import { profile } from '../../profile';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div>
        <p className="eyebrow">A little about me</p>
        <h2 className="title" id="about-title">Creativity meets technology.</h2>
        <p>I’m {profile.name}, based in {profile.location}. My background in Business Information Technology shapes how I approach digital challenges: with a focus on people, practical solutions, and creative thinking.</p>
        <p>From developing software to editing videos, I enjoy bringing ideas to life. I’m also exploring how AI-powered technologies can support both technical and creative work.</p>
      </div>
      <dl className={styles.facts}>
        <div><dt>Background</dt><dd>Business Information Technology</dd></div>
        <div><dt>Based in</dt><dd>{profile.location}</dd></div>
        <div><dt>My focus</dt><dd>Digital solutions & visual storytelling</dd></div>
      </dl>
    </section>
  );
}

export default About;
