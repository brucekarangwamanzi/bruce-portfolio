import styles from './Skils.module.css';

const skills = [
  { symbol: '</>', title: 'Software Development', detail: 'Practical digital solutions' },
  { symbol: '▶', title: 'Video Editing', detail: 'Creative visual storytelling' },
  { symbol: 'BIT', title: 'Business IT', detail: 'Business Information Technology background' },
  { symbol: 'AI', title: 'AI Technologies', detail: 'Exploration & continuous learning' },
];

function Skils() {
  return (
    <section className={styles.Skils_wrapper} id="skills" aria-labelledby="skills-title">
      <p className="eyebrow">My toolkit</p>
      <h2 className="title" id="skills-title">Skills & interests</h2>
      <p>A blend of technical thinking, creativity, and a drive to keep learning.</p>
      <div className={styles.Skils_card_wrapper}>
        {skills.map(skill => (
          <article className={styles.Skils_card} key={skill.title}>
            <span className={styles.symbol} aria-hidden="true">{skill.symbol}</span>
            <h3>{skill.title}</h3>
            <p>{skill.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skils;
