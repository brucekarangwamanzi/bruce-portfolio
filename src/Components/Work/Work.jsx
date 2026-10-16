import { profile } from '../../profile';
import styles from './Work.module.css';

function Work() {
  return (
    <section className={styles.work_wrapper} id="work" aria-labelledby="work-title">
      <div>
        <p className="eyebrow">Explore my work</p>
        <h2 className="title" id="work-title">Ideas into digital experiences.</h2>
        <p>Visit my GitHub to explore the code I share, or get in touch to talk about a software or video project.</p>
      </div>
      <div className={styles.links}>
        <a className="button" href={profile.github} target="_blank" rel="noopener noreferrer">Explore my GitHub <span aria-hidden="true">↗</span></a>
        <a className={styles.contactLink} href="#contact">Discuss a project <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}

export default Work;
